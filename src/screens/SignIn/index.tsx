import React, {useRef, useState} from 'react';

import {StyleSheet, View, Platform, Keyboard} from 'react-native';
import {useTheme} from 'styled-components';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Toast from 'react-native-toast-message';

import logoImg from '../../assets/images/logo_ioasys.png';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Text} from '../../components/Text';

import {api} from 'src/services/api';

import {formValidation, FormValues} from './yup';

import {Container, FormContainer, Logo} from './styles';

function SignIn() {
  const theme = useTheme();
  const passwordInputRef = useRef(null);
  const [fetching, setFetching] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(formValidation),
  });

  const onSubmit = async ({ email, password }: FormValues) => {
    setFetching(true);
    Keyboard.dismiss();

    try {
      const body = {
        email,
        password,
      };

      const { data, headers } = await api.post('/users/auth/sign_in', body);

      Toast.show({
        text1: 'Sucesso',
        text2: 'Aguarde enquanto buscamos os dados das empresas',
        type: 'success',
      });
    } catch {
      Toast.show({
        text1: 'Oops!',
        text2: 'Erro ao validar as credenciais, e-mail ou senha incorretos.',
        type: 'error',
      });
    } finally {
      setFetching(false);
    }
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
