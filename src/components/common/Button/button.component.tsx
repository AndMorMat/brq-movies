import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { styles } from './button.styles';
import { IButtonProps } from './types';

export const Button = ({
  text,
  disabled,
  onPress,
  loading
}: IButtonProps): JSX.Element => {

  const disabledStyle = disabled && styles.disabled

  if (loading) {
    return <ActivityIndicator size="large" color="#EC8B00" />
  }

  return (
    <TouchableOpacity style={[styles.defaultContainer, disabledStyle]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.defaultText, disabledStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}