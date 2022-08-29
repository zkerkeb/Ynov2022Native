import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const TouchableOpacityPractice = () => {
  const click = () => {
    alert('Bravo !');
  };

  return (
    <View>
      <TouchableOpacity onPress={click}>
        <Text>Appuyez ici</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableOpacityPractice;
