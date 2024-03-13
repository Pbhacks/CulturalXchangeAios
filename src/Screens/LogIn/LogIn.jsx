import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../../config';
import Colors from '../../Utils/Color';
import { Text, Input, Button,InputField,FormControl,VStack,Heading,InputSlot,ButtonText,Icon } from "@gluestack-ui/themed";



const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return (
    <FormControl
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      $dark-borderWidth="$1"
      $dark-borderRadius="$lg"
      $dark-borderColor="$borderDark800"
    >
      <VStack space="xl">
        <Heading color="$text900" lineHeight="$md">
          Login
        </Heading>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Email
          </Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text color="$text500" lineHeight="$xs">
            Password
          </Text>
          <Input textAlign="center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot pr="$3" onPress={handleState}>
              <Icon as={showPassword ? EyeIcon : EyeOffIcon}
                // color="$darkBlue500"
              />
            </InputSlot>
          </Input>
        </VStack>
        <Button
          ml="auto"
          onPress={() => {
            setShowModal(false)
          }}
        >
          <ButtonText color="$white">Save</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};

export default LogIn;
