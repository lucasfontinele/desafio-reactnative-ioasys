import React, { forwardRef } from 'react';
import {TextInputProps, TextInput, StyleSheet} from 'react-native';

import {useTheme} from 'styled-components';

import {Text} from '../Text';

type InputProps = TextInputProps & {
  error?: string;
};

import {Container} from './styles';

export const Input = forwardRef<TextInput, InputProps>((props: InputProps, ref) => {
  const theme = useTheme();

  return (
    <>
      <Container
        {...props}
        ref={ref}
      />
      {props.error && <Text color={theme.colors.red} weight="semibold" style={styles.errorMessageContainer} size={10}>{props.error}</Text>}
    </>
  )
});

const styles = StyleSheet.create({
  errorMessageContainer: {
    margin: 5,
  },
});
