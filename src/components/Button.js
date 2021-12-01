import React from 'react';
import { ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Colors } from '../assets/colors';

const Container = styled.View(props => ({
  alignItems: 'center',
  backgroundColor: props.disabled ? props.disabledColor : props.color,
  borderColor: props.disabled ? props.disabledBorderColor : props.border,
  borderRadius: 4,
  borderWidth: 2,
  justifyContent: 'center',
  paddingVertical: 16,
}));

const Text = styled.Text(props => ({
  fontSize: 16,
  color: props.textColor,
}));

const Touchable = styled.TouchableHighlight({
  alignSelf: 'stretch',
  borderRadius: 4,
  overflow: 'hidden',
});

const Button = props => (
  <Touchable
    disabled={props.disabled}
    onPress={props.onPress}
    style={props.style}
    underlayColor={Colors.disable}
  >
    <Container
      border={props.border}
      color={props.color}
      disabled={props.disabled}
      disabledBorderColor={props.disabledBorderColor}
      disabledColor={props.disabledColor}
      type={props.type}
    >
       <Text textColor={props.disabled ? props.disabledTextColor : props.textColor}>{props.text}</Text>
    </Container>
  </Touchable>
);

Button.defaultProps = {
  border: Colors.primary,
  color: Colors.primary,
  disabled: false,
  disabledBorderColor: Colors.lightgray,
  disabledColor: Colors.lightgray,
  disabledTextColor: Colors.white,
  onPress: () => {},
  style: null,
  textColor: Colors.white,
};

Button.propTypes = {
  border: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  disabledBorderColor: PropTypes.string,
  disabledColor: PropTypes.string,
  disabledTextColor: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default Button;
