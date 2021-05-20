import React from 'react';

import {StyleSheet, ViewStyle, ImageStyle} from 'react-native';

import { Text } from '../Text';
import { Wrapper, Container, Background, Content } from './styles';

type CompanyCardProps = {
  style?: ViewStyle;
  name: string;
  empty?: boolean;
};

export function CompanyCard({ style, name, empty = false }: CompanyCardProps) {
  return (
    <Wrapper style={style}>
      <Container style={[style, empty ? styles.emptyCard : {}]}>
        {!empty && (
          <Background
            source={{ uri: 'https://empresas.ioasys.com.br/uploads/enterprise/photo/17/240.jpeg' }}
            resizeMethod="resize"
            resizeMode="cover"
          />
        )}
        <Content>
          <Text
            size={15}
            color="#fff"
            weight="bold"
          >
            {name}
          </Text>
        </Content>
      </Container>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  emptyCard: {
    borderWidth: 0,
  }
});
