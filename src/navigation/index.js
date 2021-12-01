import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import colors from '../assets/colors';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import NativeModuleScreen from '../screens/NativeModulescreen';

const AppStack = createStackNavigator({
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: ({ screenProps }) => ({
        ...colors.Navigation.primary,
        title: 'Welcome',
      })
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ screenProps, navigation }) => ({
        ...colors.Navigation.primary,
        headerLeft: () => <HeaderBackButton onPress={() => { navigation.pop() }} />,
        title: 'Home'
      })
    },
    NativeModule: {
      screen: NativeModuleScreen,
      navigationOptions: ({ screenProps, navigation }) => ({
        ...colors.Navigation.primary,
        headerLeft: () => <HeaderBackButton onPress={() => { navigation.pop() }} />,
        title: 'Native Module'
      })
    }
  },{
    defaultNavigationOptions:{ gestureEnabled: false },
  });

export default createStackNavigator({
    AppStack
},{
    initialRouteName: 'AppStack',
    defaultNavigationOptions: { headerShown: false, gestureEnabled: false },
}) 