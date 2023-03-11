import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { AuthContextProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Routes />
    </AuthContextProvider>
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Olá mundo</Text>
    // </View>
  );
}
