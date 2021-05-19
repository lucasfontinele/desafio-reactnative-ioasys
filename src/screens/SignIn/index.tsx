import React, {useRef} from 'react';

import {StyleSheet, View, Platform, Keyboard} from 'react-native';
import {useTheme} from 'styled-components';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useSelector, useDispatch} from 'react-redux';

import { ApplicationState } from '../../store/createStore';
import { handleSignInRequest, handleFetching } from '../../store/modules/auth/actions';

import logoImg from '../../assets/images/logo_ioasys.png';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Text} from '../../components/Text';

import {formValidation, FormValues} from './yup';

import {Container, FormContainer, Logo} from './styles';

function SignIn() {
  const dispatch = useDispatch();

  const theme = useTheme();
  const passwordInputRef = useRef(null);
  const { fetching } = useSelector((state: ApplicationState) => state.auth);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(formValidation),
  });

  const onSubmit = async ({ email, password }: FormValues) => {
    Keyboard.dismiss();

    dispatch(handleFetching(true));
    dispatch(handleSignInRequest(email, password));
  };

  return (
    <Container
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
    >
      <Logo source={logoImg} resizeMode="contain" />
      <FormContainer>
        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCompleteType="off"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                blurOnSubmit={false}
                // @ts-ignore: Object is possibly 'null'
                onSubmitEditing={() => passwordInputRef.current.focus()}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Digite sua senha"
                secureTextEntry
                returnKeyType="send"
                autoCompleteType="off"
                autoCapitalize="none"
                autoCorrect={false}
                ref={passwordInputRef}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
                onSubmitEditing={handleSubmit(onSubmit)}
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
        </View>
        <Button
          onPress={handleSubmit(onSubmit)}
          containerStyle={!errors.password ? styles.submitButtonContainer : styles.submittedButtonError}
          loading={fetching}
        >
          <Text color={theme.colors.shape} weight="bold" size={14}>
            Acessar
          </Text>
        </Button>
      </FormContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    lineHeight: 30,
  },
  inputsContainer: {
    height: 120,
    justifyContent: 'space-between',
  },
  submitButtonContainer: {
    marginTop: 24,
  },
  submittedButtonError: {
    marginTop: 45,
  }
});

export default SignIn;
