import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ loading: boolean }>`
  width: 100%;
  height: 56px;
  background: #33CC95;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  ${({ loading }) => loading && css`
    opacity: 0.5;
  `}
`;
