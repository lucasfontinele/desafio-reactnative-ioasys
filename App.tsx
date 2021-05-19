import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import {Router} from './src/routes';

// Theme
import theme from './src/styles/Global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
