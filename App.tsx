// App.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from './config';
import LogIn from './src/Screens/LogIn/LogIn';
import Registration from './src/Screens/LogIn/Registration';
import Communities from './src/Screens/Communities/Communities';
import Chat from './src/Screens/Chat/Chat';
import AiBot from './src/Screens/AiBot/AiBot';
import Navbar from './src/Components/Navbar';
import DefaultScreen from './src/Screens/DefaultScreen/DefaultScreen';

const Stack = createStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // handle user state change
  function onAuthStateChanged(newUser) {
    setUser(newUser);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DefaultScreen" component={DefaultScreen} />
      <Stack.Screen name="Communities" component={Communities} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="AiBot" component={AiBot} />
    </Stack.Navigator>
  );
}
