// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Screen from './src/components/Screen';
import Stack from './src/navigation';
import appReducer from './src/redux/appReducer';
import { createAppContainer } from 'react-navigation';

const Navigation = createAppContainer(Stack);

const store = createStore(appReducer);

const App = () => {
  return (
    <Screen darkBar>
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
