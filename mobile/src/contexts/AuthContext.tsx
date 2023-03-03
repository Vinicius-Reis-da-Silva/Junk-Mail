import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

import { api } from "../services/api";

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  email: string;
  picture: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  googleSignIn: () => Promise<void>;
  isUserLoaded: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "937835782790-jm9174l2qs7vugpg4q71qmm6k3l25jrg.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })

  async function googleSignIn() {
    try {
      setIsUserLoaded(true);
      await promptAsync();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoaded(false);
    }
  }

  async function signInWithGoogle(access_token: string) {
    try {
      setIsUserLoaded(true);

      const tokenResponse = await api.post('/users', { access_token });
      api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;
      
      const userInfoResponse = await api.get('/me');
      setUser(userInfoResponse.data.user)

    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoaded(false);
    }
  }

  // função quando o componente e rederizado
  useEffect(() => {
      if(response?.type === 'success' && response.authentication?.accessToken){
          signInWithGoogle(response.authentication.accessToken);
      }
  }, [response]);

  return (
    <AuthContext.Provider value={{
      googleSignIn,
      isUserLoaded,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

