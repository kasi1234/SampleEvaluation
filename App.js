//@flow
import * as React from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Screen from './src/components/Screen';
import appReducer from './src/redux/appReducer';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

const store = createStore(appReducer);

type Props = {
  isSimulator: boolean,
  isEmulator: boolean
}

const App = ({isSimulator=false, isEmulator=false}: Props): React.Element<*> => {
  
  if (isSimulator) {
   Alert.alert(
      'Alert',
      'App launched on iOS Simulator',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  } else if (isEmulator) {
    Alert.alert(
      'Alert',
      'App launched on Android Emulator',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  } else {
    Alert.alert(
      'Alert',
      'App launched on Device',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  }

  return (
    <Screen darkBar>
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
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
