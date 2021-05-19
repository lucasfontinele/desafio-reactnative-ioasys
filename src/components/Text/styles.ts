import styled, {css} from 'styled-components/native';

import {TextStyle} from './';

const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semibold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold'
};

export const Container = styled.Text<TextStyle>`
  ${({ weight, color, size }) => css`
    color: ${color};
    font-family: ${fonts[weight]};
    font-size: ${size?.toString()}px;
  `}
`;
