import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  title: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"]
}

export function ButtonSignIn({ title, icon, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity 
      className="flex-row h-11 bg-white border-2 border-green-600 rounded-lg items-center space-x-4 justify-center px-4"
      onPress={onPress}
      {...rest}
    >
      <Text className="font-semibold text-base text-center">
        {title}
      </Text>
      <FontAwesome 
        name={icon}
        color="#000"
        size={24}
      />
    </TouchableOpacity>
  );
}

