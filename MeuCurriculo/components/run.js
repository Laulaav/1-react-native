import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import principal from '../components/principal';
import sobreMim from '../components/sobreMim';
import formacao from '../components/formacao';

const Stack = createNativeStackNavigator();

const run = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="principal" component={principal} />
        <Stack.Screen name="sobreMim" component={sobreMim} />
        <Stack.Screen name="formacao" component={formacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default run;