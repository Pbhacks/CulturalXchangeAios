import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './config';
import LogIn from './src/Screens/LogIn/LogIn';
import Registration from './src/Screens/LogIn/Registration';
import Communities from './src/Screens/Communities/Communities';
import { StyleSheet, View } from 'react-native';

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
      <View style={styles.container}>
        {user ? (
          <Communities />
        ) : (
          <>
            <LogIn />
            {/* Uncomment the following line if you want to include the Registration component */}
            {/* <Registration /> */}
          </>
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});
