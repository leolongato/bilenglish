import React from 'react';
import Login from './src/pages/login/index';
import Teste from './src/pages/InitialTest/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Registrar-se" headerMode="none" gesturesEnabled={false}>
              <Stack.Screen name="Registrar-se" component={Login} />
              <Stack.Screen name="Teste" component={Teste} />
            </Stack.Navigator>
      </NavigationContainer>
  );
}