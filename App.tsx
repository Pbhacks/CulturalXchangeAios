import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { firebase } from './config';
import LogIn from './src/Screens/LogIn/LogIn';
import Registration from './src/Screens/LogIn/Registration';
import Communities from './src/Screens/Communities/Communities';

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
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        {user ? (
          <Communities />
        ) : (
          <>
            <LogIn />
            {/* Uncomment the following line if you want to include the Registration component */}
            {/* <Registration /> */}
          </>
        )}
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
