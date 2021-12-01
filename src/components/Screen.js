import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../assets/colors';

export const Screen = (props) => {
  const Container = props.view ? View : SafeAreaView;
  const getBarStyle = () => (props.darkBar ? 'dark-content' : 'light-content');

  return (
    <Container style={{ flex: 1, backgroundColor: props.background }}>
        <StatusBar barStyle={getBarStyle()} />
        {props.children}
    </Container>
  );
};

Screen.defaultProps = {
  background: Colors.white,
  darkBar: false,
};

Screen.propTypes = {
  background: PropTypes.string,
  darkBar: PropTypes.bool
};

export default Screen;
