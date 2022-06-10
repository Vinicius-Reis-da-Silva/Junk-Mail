import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroductionEnd from './src/pages/IntroductionEnd';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <IntroductionEnd />
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
