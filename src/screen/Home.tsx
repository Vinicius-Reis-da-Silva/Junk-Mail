import { View, Text } from "react-native";

import { ButtonSignIn } from "../components/ButtonSignIn";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";

export function Home() {

  const { user } = useAuth();

  return (
    <View className="flex-1 items-center">
      <Header />
      <Text>Home Screen</Text>
      <ButtonSignIn 
        className="flex flex-col mt-1 items-center p-2 border-2 border-green-700 rounded-lg"
        title="Log Data"
        icon="database"
        onPress={ () => console.log(user) }
      />
    </View>
  );
}