//@flow
import * as React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../assets/colors';

type Props = {
  border: string,
  color: string,
  disabled: boolean,
  disabledBorderColor: string,
  disabledColor: string,
  disabledTextColor: string,
  onPress: Function,
  style?: Object | Array<Object>,
  text: string,
  textColor: string,
};

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

const Button = ({
  disabled,
  onPress,
  style,
  border,
  color,
  disabledBorderColor,
  disabledTextColor,
  disabledColor,
  text,
  textColor,
}: Props): React.Element<*> => {
  return (
    <Touchable
      disabled={disabled}
      onPress={onPress}
      style={style}
      underlayColor={Colors.disable}>
      <Container
        border={border}
        color={color}
        disabled={disabled}
        disabledBorderColor={disabledBorderColor}
        disabledColor={disabledColor}>
        <Text textColor={disabled ? disabledTextColor : textColor}>{text}</Text>
      </Container>
    </Touchable>
  )
}

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

export default Button;
