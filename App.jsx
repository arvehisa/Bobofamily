import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Greeting from './src/components/hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting bang = {true}>Bobofamily</Greeting>
      <Greeting bang style={{fontSize: 16 }}>Small Bobofamily</Greeting>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable */}
      <StatusBar style="auto" />
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
