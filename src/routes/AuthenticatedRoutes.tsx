import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// import Home from 'src/pages/Home';

const Stack = createStackNavigator();

export default function AuthenticatedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}
