import React from 'react';

import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import Toast from 'react-native-toast-message';

import { Provider } from 'react-redux';

import { store } from './src/store/index';
import {Router} from './src/routes';

// Theme
import theme from './src/styles/Global';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.viewContainer}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <SafeAreaView style={styles.safeAreaContainer}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaView>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: theme.colors['blue-light'],
  },
  safeAreaContainer: {
    flex: 1,
  },
});

export default App;
