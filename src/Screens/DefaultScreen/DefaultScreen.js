// DefaultScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../../Components/Navbar';
import { createStackNavigator } from '@react-navigation/stack';
import AiBot from '../AiBot/AiBot'; // Import your AiBot component
import Chat from '../Chat/Chat'; // Import your Chat component
import Communities from '../Communities/Communities'; // Import your Communities component

const Stack = createStackNavigator();

export default function DefaultScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack.Navigator>
          <Stack.Screen name="Communities" component={Communities} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="AiBot" component={AiBot} />
        </Stack.Navigator>
      </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});
