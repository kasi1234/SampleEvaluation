
import * as React from 'react';
import { View, Text, StyleSheet, NativeModules, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Screen from '../components/Screen';
import { Colors } from '../assets/colors';
import Button from '../components/Button'

const NativeModuleScreen = ({ navigation }: Props): React.Element<*> => {
  const [isShowAlert, setShowAlert] = React.useState(false);
  const username = useSelector(state => state?.username);

  const alertShow = () => {
    NativeModules.SampleAlert.alertShow()
    updateStatus()
    showAlert('Alert shown based on native module alert shown status')
  }

  const alertClose = () => {
    NativeModules.SampleAlert.alertClose()
    updateStatus()
    showAlert('Alert shown based on native module alert closed status')
  }

  const updateStatus = () => {
    NativeModules.SampleAlert.getStatus((error, isAlerShown) => {
      setShowAlert(isAlerShown)
    })
  }

  const showAlert = (message) => {
    Alert.alert(
      'Alert',
      message,
      [{ text: 'OK' }],
      { cancelable: false },
    );
  }

  React.useEffect(() => {
    updateStatus();
  }, [])

  return (
    <Screen darkBar>
      <View style={styles.container}>
        <Text style={styles.text}>
          {`User Name: ${username}`}
        </Text>
        <Text style={styles.text}>
          {`Alert Status: ${isShowAlert ? 'ON' : ' OFF'}`}
        </Text>
        <Button
          onPress={() => {
            !isShowAlert ? alertShow() : alertClose()
          }}
          style={{ marginHorizontal: 20 }}
          text={`Alert ${isShowAlert ? 'OFF' : ' ON'}`}
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
  text: {
    color: Colors.body,
    textAlign: 'center',
    fontSize: 32,
    margin: 32
  }
});

export default NativeModuleScreen;