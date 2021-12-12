import React from 'react';
import {render, fireEvent, expect} from '@testing-library/react-native';
import WelcomeScreen from '../src/screens/WelcomeScreen';

test('WelcomeScreen', () => {
  const {debug, getByTestId, getByText } = render(<WelcomeScreen />);
  const input = getByTestId('userName');
  const button1= getByText('Submit');
  const button2 = getByText('Native Module');
  fireEvent.changeText(input, 'user');
  fireEvent.press(button1);
  fireEvent.press(button2);
  const user = getByText('user');
  expect(user).toBeDefined();

});