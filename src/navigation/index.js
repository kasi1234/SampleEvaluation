import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import NativeModuleScreen from '../screens/NativeModulescreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName={'Welcome'}
    headerMode="none"
    screenOptions={{ gestureEnabled: false }}
  >
    <Stack.Screen name='Welcome' component={WelcomeScreen} />
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='NativeModule' component={NativeModuleScreen} />
  </Stack.Navigator>
)

export default AppStack;