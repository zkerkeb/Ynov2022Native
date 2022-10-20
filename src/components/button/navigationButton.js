import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// factorisation du code: on cree un componnent Button
//    ->{onPress,label}: destructuration

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
