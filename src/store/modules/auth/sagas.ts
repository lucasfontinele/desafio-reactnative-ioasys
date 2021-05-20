import {takeLatest, call, put, all} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

import {api} from '../../../services/api';
import {IAuthResponse} from '../investor/types';

import { HANDLE_SIGN_REQUEST, HandleSignInAction, RequestHeaders } from './types';
import { handleFetching, handleSignIn } from './actions';

import { handleInvestor } from '../investor/actions';

type RequestAuthResponse = {
  data: IAuthResponse;
  headers: RequestHeaders;
};

export function* signIn({ payload }: HandleSignInAction) {
  try {
    const { email, password } = payload;

    const { data, headers }: RequestAuthResponse = yield call(api.post, '/users/auth/sign_in', { email, password });

    const requestHeaders: RequestHeaders = {
      accessToken: headers.accessToken,
      client: headers.client,
      uid: headers.uid,
    };

    yield put(handleInvestor(data.investor));

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
  takeLatest(HANDLE_SIGN_REQUEST, signIn),
]);
