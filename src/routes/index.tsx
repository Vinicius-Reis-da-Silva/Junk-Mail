import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import { SignIn } from "../screen/SignIn";
import { AppRoutes } from "./app.routes";

export function Routes() {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.name ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}