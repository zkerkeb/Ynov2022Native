import React from 'react';
import {Text, View} from 'react-native';

const TextPractice = () => {
  return (
    <View>
      <Text>un Texte Classique</Text>
      <Text>
        Bonjour on est bien sur le TextPractice, et{' '}
        <Text style={{fontWeight: '600', color: 'red'}}>
          on peux rajouter du Text avec d'autre style
        </Text>
      </Text>
    </View>
  );
};

export default TextPractice;
