import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  width: 140px;
  height: 230px;
`;

export const Container = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #cecece;
  border-radius: 16px;
`;

export const Background = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  position: absolute;
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px;
  justify-content: flex-end;
`;
