import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator>
      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}