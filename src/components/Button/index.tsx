import React, {ReactNode} from 'react';
import { useEffect } from 'react';

import {TouchableOpacity, ViewStyle, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
};

Icon.loadFont();

export function Button({ children, onPress, style, containerStyle, loading = false }: ButtonProps) {
  const spinValue = new Animated.Value(0);
    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    // First set up animation
    const loop = Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear, // Easing is an additional import from react-native
          useNativeDriver: true  // To make use of native driver for performance
        }
      )
    );

  useEffect(() => {
    if (loading) {
      loop.start();
    } else {
      loop.stop();
    }
  }, [loading]);

  return (
    <TouchableOpacity onPress={onPress} disabled={loading} style={containerStyle}>
      <Container style={style} loading={loading}>
        {loading ? (
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name="refresh" color="#fff" size={25} />
          </Animated.View>
        ): (
          children
        )}
      </Container>
    </TouchableOpacity>
  );
};
