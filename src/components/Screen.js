//@flow
import * as React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Colors } from '../assets/colors';

type Props = {
  background: string,
  darkBar: boolean,
  view: boolean,
  children: React.Node
};

const Screen = ({background, darkBar, view, children }: Props): React.Element<*> => {
  const Container = view ? View : SafeAreaView;
  const getBarStyle = () => (darkBar ? 'dark-content' : 'light-content');

  return (
    <Container style={{ flex: 1, backgroundColor: background }}>
        <StatusBar barStyle={getBarStyle()} />
        {children}
    </Container>
  );
};


Screen.defaultProps = {
  background: Colors.white,
  darkBar: false,
  view: false,
  children: null 
};

export default Screen;
