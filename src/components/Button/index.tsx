import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

// interface ButtonProps {
//   children: ReactNode;
// }

Icon.loadFont();

export function Button() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Text style={{ fontFamily: 'Poppins-Bold' }}>Button</Text>
        {/* <Icon name="users" /> */}
      </Container>
    </TouchableOpacity>
  );
};
