import { View } from "react-native";
import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function SignIn() {

  const { googleSignIn, user } = useAuth();

  return (
    <View className="w-full items-center ">
      <Header />
      <Button 
        title="Fazer login com o Google"
        icon="google"
        onPress={ googleSignIn }
      />
    </View>
  );
}

