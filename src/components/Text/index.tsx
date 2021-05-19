import React, {ReactNode} from 'react';

import {TextStyle as TextStyleProps} from 'react-native';

import {Container} from './styles';

export type TextStyle = {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
  size?: number;
};

type TextProps = TextStyle & {
  children: ReactNode;
  style?: TextStyleProps;
};

export function Text({
  children,
  weight = 'regular',
  color = '#000',
  size = 20,
  style
}: TextProps) {
  return (
    <Container
      size={size}
      weight={weight}
      color={color}
      style={style}
    >
      {children}
    </Container>
  );
};

Text.defaultProps = {
  color: '#000',
  weight: 'regular',
  size: 20,
};
