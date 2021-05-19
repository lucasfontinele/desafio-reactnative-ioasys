import React from 'react';

import {Text} from 'react-native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {Container} from './styles';

function SignIn() {
  return (
    <Container>
      <Text>SignIn</Text>
      <Input />
      <Input />
      <Button />
    </Container>
  );
}

export default SignIn;
