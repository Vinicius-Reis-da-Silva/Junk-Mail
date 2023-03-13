import { View, Text } from 'react-native';

import Logo from '../../assets/logo.svg';

export function Header(){
  return (
    <View className="w-4/5 items-center py-12">
      <Logo  width={270} height={220}  />
      <Text className="text-4xl font-bold">Junk Mail</Text>
      <Text className="text-lg italic font-light text-center">
        Esse App vai auxiliar você a fazer o descarte correto do seu lixo eletrônico.
      </Text>
    </View>
  );
}