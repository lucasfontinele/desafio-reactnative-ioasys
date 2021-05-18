import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// import Landing from 'src/pages/Landing';
// import SignIn from 'src/pages/SignIn';
// import SignUp from 'src/pages/SignUp';
// import RecoverPassword from 'src/pages/RecoverPassword';

const Stack = createStackNavigator();

export default function UnAuthenticatedRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} /> */}
    </Stack.Navigator>
  );
}
