import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LoginUser from './src/pages/LoginUser';

export default function App() {

  return (
    <View >
      <StatusBar backgroundColor='black' style='light'  />
      <LoginUser />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
