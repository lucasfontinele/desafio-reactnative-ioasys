import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  width: 100%;

  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 0 24px;
`;

export const Logo = styled.Image`
  width: 200px;
`;
