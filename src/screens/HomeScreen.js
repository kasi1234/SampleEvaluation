//@flow
import * as React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {SwipeButton} from 'rn-swipe-button';
import Screen from '../components/Screen';
import Button from '../components/Button';
import { Colors } from '../assets/colors';
import { useSelector } from 'react-redux';

type Props = {
  navigation: {
    navigate: Function
  }
};

const showAlert = (message) => {
  Alert.alert(
    'Alert',
    message,
    [{ text: 'OK' }],
    { cancelable: false },
  );
}

const HomeScreen = ({ navigation }: Props): React.Element<*> => {
    const username = useSelector(state => state?.username);
    const { container, text, buttonsContainer, buttonStyle } = styles;
  return (
    <Screen darkBar>
      <View style={container}>
        <Text testID='greeting' style={text}>
            {`Hello User: ${username}`}
        </Text>
      </View>
      <View style={buttonsContainer}>
        <Button
          testID="button1"
          border={Colors.white}
          color={Colors.white}
          textColor={Colors.primary}
          onPress={() => {
            showAlert('Message from Button1')
          }}
          style={buttonStyle}
          text='Press Me'
        />
        <Button
          testID="button2"
          border={Colors.white}
          color={Colors.disable}
          textColor={Colors.primary}
          onPress={() => {
            showAlert('Message from Button2');
          }}
          style={buttonStyle}
          text='Press Me'
        />
        <Button
          testID="button3"
          textColor={Colors.white}
          onPress={() => {
            showAlert('Message from Button3');
          }}
          style={buttonStyle}
          text='Press Me'
        />
        <SwipeButton
          title="Slide to Continue"
          titleColor={Colors.primary}
          thumbIconBackgroundColor={Colors.primary}
          railBackgroundColor={Colors.white}
          railFillBackgroundColor={Colors.primary}
          swipeSuccessThreshold={80}
          shouldResetAfterSuccess  
          onSwipeSuccess={() => showAlert('Message from slider button')}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    buttonsContainer: {
        justifyContent: 'flex-end',
        margin: 20,
    },
    buttonStyle: {
      marginVertical: 8
    },
    text: {
        color: Colors.body,
        textAlign: 'center',
        fontSize: 32,
        margin: 32
    }
});

export default HomeScreen;