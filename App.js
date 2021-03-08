import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from "./component/Navbar"
import StartGameScreen from "./screen/StartGameScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Guess The Number"/>
      <StartGameScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
    
  },
});
