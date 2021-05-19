import styled from 'styled-components/native';

import {IconButton as MuiIconButton} from 'react-native-paper';

export const Wrapper = styled.View`
  position: relative;
`;

export const Container = styled.TextInput`
  background: #E7E9EE;
  border: 1px solid #D7D7D7;
  border-radius: 5px;
  height: 56px;
  padding-left: 16px;
  font-family: Poppins-Medium;
`;

export const IconButton = styled(MuiIconButton)`
  position: absolute;
  right: 5px;
  top: 7px;
`;
