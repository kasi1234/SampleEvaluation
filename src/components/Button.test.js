import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Testing button', () => {
  const wrapper = renderer.create(<Button text="Test Button" />);

  console.log(wrapper.toJSON())

  const { color, textColor } = wrapper.toJSON().props;

  it('Should render', () => {
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('Should have blue background', () => {
    expect(color).toBe('blue');
  });

  it('Should have white text', () => {
    expect(textColor).toBe('white');
  });
});