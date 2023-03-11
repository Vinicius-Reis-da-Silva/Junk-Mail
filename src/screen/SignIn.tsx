import { View } from "react-native";
import { useAuth } from "../hooks/useAuth";

import { ButtonSignIn } from "../components/ButtonSignIn";
import { HeaderSignIn } from "../components/HeaderSignIn";


export function SignIn() {

  const { googleSignIn, user } = useAuth();

  return (
    <View className="flex-1 w-full items-center justify-center ">
      <HeaderSignIn />
      <ButtonSignIn 
        title="Fazer login com o Google"
        icon="google"
        onPress={ googleSignIn }
      />
    </View>
  );
}

