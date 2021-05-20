import React, {forwardRef, useState} from 'react';

import {TextInputProps, TextInput, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text} from '../Text';

Icon.loadFont();

type InputProps = TextInputProps & {
  error?: string;
  icon?: string;
};

import {Wrapper, Container, IconButton} from './styles';

export const Input = forwardRef<TextInput, InputProps>((props: InputProps, ref) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(() => props.secureTextEntry);

  return (
    <Wrapper>
      <Container
        {...props}
        secureTextEntry={secureTextEntry}
        ref={ref}
      />
      {props.secureTextEntry && (
        <IconButton
          icon={secureTextEntry ? 'eye' : 'eye-off'}
          size={20}
          color="#000"
          onPress={() => setSecureTextEntry(previous => !previous)}
        />
      )}
      {props.icon && <Icon name={props.icon} size={20} color="#000" style={styles.customIcon} />}
      {props.error && <Text color={theme.colors.red} weight="semibold" style={styles.errorMessageContainer} size={10}>{props.error}</Text>}
    </Wrapper>
  )
});

const styles = StyleSheet.create({
  errorMessageContainer: {
    margin: 5,
  },
  customIcon: {
    position: 'absolute',
    right: 15,
    top: 18,
  }
});
