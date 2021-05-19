import React from 'react';

import {Text} from 'react-native';
import {TextInput} from 'react-native-paper';

import {Container} from './styles';

function SignIn() {
  return (
    <Container>
      <Text style={{color: '#000'}}>SignIn</Text>
      <TextInput />
    </Container>
  );
}

export default SignIn;
