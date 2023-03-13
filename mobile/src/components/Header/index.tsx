import { View, Text } from "react-native";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <View className="flex-row items-center w-full pl-3">
      <Logo width={84} height={84} />
      <Text className="text-2xl font-semibold">Junk Mail</Text>
    </View>
  );
}