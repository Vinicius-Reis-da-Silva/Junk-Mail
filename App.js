import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LoginUser from './src/pages/LoginUser';
import UserRegistration from './src/pages/UserRegistration';
import CompanyRegistration from './src/pages/CompanyRegistration';

export default function App() {

  return (
    <View >
      <StatusBar backgroundColor='black' style='light'  />
      <CompanyRegistration />
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
