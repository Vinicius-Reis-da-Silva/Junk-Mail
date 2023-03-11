import React from "react";
import { Image, View, Text } from "react-native";

export type UserProfileProps = {
  name: string;
  email: string;
  picture: string;
}

type Props = {
  user: UserProfileProps;
}

export function UserProfile({ user }: Props) {
  return (
    <View className="w-full h-full items-center">
      <Image 
        className="h-16 w-16 rounded-full border-4"
        source={{ uri: user.picture }}
      />

      <Text className="text-3xl font-semibold">
        {user.name}
      </Text>

      <Text>
        {user.email}
      </Text>
    </View>
  );
}