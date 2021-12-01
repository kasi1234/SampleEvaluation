//@flow
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/appActions';
import Button from '../components/Button';
import { Colors } from '../assets/colors';

const WelcomeScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const navigateToScreen = (screenName) => {
    dispatch(setUsername(name));
    navigation.navigate(screenName);
    setName('');
  }

  return (
    <Screen darkBar>
      <View style={styles.container}>
        <Text style={styles.text}>
          EXAZE
        </Text>
        <TextInput
          value={name}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Name"
          placeholderTextColor={Colors.placeholderTextColor}
          autoCapitalize="none"
          onChangeText={text => setName(text)}
        />
        <Button
          disabled={!name}
          onPress={() =>
            navigateToScreen('Home')
          }
          style={{ margin: 20 }}
          text='Continue'
        />
        <Button
          disabled={!name}
          onPress={() =>
            navigateToScreen('NativeModule')
          }
          style={{ marginHorizontal: 20 }}
          text='Native Module'
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    alignItems: 'center',
    borderColor: Colors.body,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    marginTop: 40,
    marginHorizontal: 20,
    alignSelf: 'stretch',
  },
  text: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 30,
  }
});

export default WelcomeScreen;