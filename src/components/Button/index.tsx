import React, { ReactNode } from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

// interface ButtonProps {
//   children: ReactNode;
// }

export function Button() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Text>Button</Text>
        {/* {children} */}
      </Container>
    </TouchableOpacity>
  );
};
