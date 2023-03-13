import { StatusBar } from 'expo-status-bar';

import { AuthContextProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Routes />
    </AuthContextProvider>
  );
}
