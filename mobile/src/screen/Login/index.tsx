import { useState, useEffect } from "react";
import { View } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { UserProfileProps } from "../UserProfile";
import { api } from "../../services/api";

WebBrowser.maybeCompleteAuthSession();

export function Login() {

  const [userData, setUserData] = useState<UserProfileProps>({} as UserProfileProps);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "937835782790-jm9174l2qs7vugpg4q71qmm6k3l25jrg.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })

  async function handleGoogleSignIn() {
    try {
      await promptAsync();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function signInWithGoogle(access_token: string) {
    try {
      const tokenResponse = await api.post('/users', { access_token });
      api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;
      
      const userInfoResponse = await api.get('/me');
      setUserData(userInfoResponse.data.user)

    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function getUsers() {
    try {
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }

  // função quando o componente e rederizado
  useEffect(() => {
      if(response?.type === 'success' && response.authentication?.accessToken){
          signInWithGoogle(response.authentication.accessToken);
      }
  }, [response]);

  return (
    <View className="w-full items-center ">
      <Header />
      <Button 
        title="Fazer login com o Google"
        icon="google"
        onPress={ handleGoogleSignIn }
      />
      <Button 
        className="flex flex-col mt-1 items-center p-2 border-2 border-green-700 rounded-lg"
        title="Log Data"
        icon="database"
        onPress={ getUsers }
      />
    </View>
  );
}

