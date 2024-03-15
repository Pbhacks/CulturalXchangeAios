import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    // Your registration logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration</Text>
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
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <Button title="Register" onPress={handleRegistration} />
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
});

export default Registration;
