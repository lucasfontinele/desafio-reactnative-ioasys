import * as yup from 'yup';

export const formValidation = yup.object().shape({
  email: yup.string().email('Você precisa informar um e-mail válido').required('Você precisa informar um e-mail'),
  password: yup.string().required('Você precisa informar uma senha'),
});

export type FormValues = {
  email: string;
  password: string;
};
