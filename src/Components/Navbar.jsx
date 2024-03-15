import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { firebase } from '../../config';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons


export default function Navbar() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login'); // Navigate to the login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <NavItem title="AiBot" icon="robot" destination="AiBot" isFocused={isFocused} />
      <NavItem title="Chat" icon="comments" destination="Chat" isFocused={isFocused} />
      <NavItem title="Communities" icon="users" destination="Communities" isFocused={isFocused} />
      <NavItem title="Logout" icon="sign-out" onPress={handleLogout} />
    </View>
  );
}

const NavItem = ({ title, icon, destination, isFocused, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate(destination);
    }
  };

  return (
    <TouchableOpacity style={styles.navItem} onPress={handlePress}>
      <FontAwesome name={icon} size={24} color={isFocused ? 'blue' : 'black'} />
      <Text style={{ color: isFocused ? 'blue' : 'black' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});
