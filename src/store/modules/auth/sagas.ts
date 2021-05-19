import {takeLatest, call, put, all} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import {api} from '../../../services/api';
import {IAuthResponse} from '../user/types';

import { HANDLE_SIGN_IN, HandleSignInAction, RequestHeaders } from './types';
import { handleFetching, handleSignIn } from './actions';

type RequestAuthResponse = {
  data: IAuthResponse;
  headers: RequestHeaders;
};

export function* signIn({ payload }: HandleSignInAction) {
  yield put(handleFetching(true));

  try {
    const { email, password } = payload;

    const { data, headers }: RequestAuthResponse = yield call(api.post, '/users/auth/sign_in', { email, password });

    // Armazena informações do usuário logado

    // Armazena informações dos headers de requisição
    const requestHeaders: RequestHeaders = {
      accessToken: headers.accessToken,
      client: headers.client,
      uid: headers.uid,
    };

    yield put(handleSignIn(requestHeaders));

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
    yield put(handleFetching(false));
  }
}

export default all([
  takeLatest(HANDLE_SIGN_IN, signIn),
]);
