import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Companies from '../screens/Companies';

const Stack = createStackNavigator();

export default function AuthenticatedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Companies"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Companies" component={Companies} />
    </Stack.Navigator>
  );
}
