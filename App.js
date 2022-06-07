import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Introduction from './src/pages/introduction';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Introduction/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
