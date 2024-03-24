import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../../config';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      navigation.navigate('DefaultScreen'); // Navigate to your main screen after successful sign-in
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRegistration = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login'); // Navigate back to login page after successful registration
    } catch (err) {
      alert(err.message);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <Button title={showPassword ? "Hide" : "Show"} onPress={handleTogglePasswordVisibility} />
        </View>
      </View>
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleGoogleSignIn}>
        <Text style={styles.googleSignInButton}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegistration}>
        <Text style={styles.registerLink}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleSignInButton: {
    marginTop: 20,
    backgroundColor: '#4285F4', // Google blue color
    color: 'white',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  registerLink: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LogIn;
