import React from 'react';
import {Text, View} from 'react-native';

// creation de la page qui permetra la visualisation d'un personnage marvel
// on auras besoin de props pour pouvoir y preciser l'ID du personnage
const Character = props => {
  console.log('🚀 ~ file: index.js ~ line 7 ~ Character ~ props', props);
  alert(props.route.params.id);
  return (
    <View>
      <Text>Page Character</Text>
    </View>
  );
};

export default Character;
