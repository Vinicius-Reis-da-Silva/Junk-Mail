import { View, Text } from "react-native";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Home() {

  const { user } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        className="flex flex-col mt-1 items-center p-2 border-2 border-green-700 rounded-lg"
        title="Log Data"
        icon="database"
        onPress={ () => console.log(user) }
      />
    </View>
  );
}