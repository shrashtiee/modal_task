// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();


function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
