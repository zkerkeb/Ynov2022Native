import {useNavigation} from '@react-navigation/native';
import React from 'react';
import defaultImage from '../../assets/images/default.jpeg';
import {Image, Text, TouchableOpacity} from 'react-native';

// on cree un composant qui va nous permettre de gerer l'affichage d'un personnage
// React.memo permet de memoriser le composant
// et de ne pas le recharger a chaque fois
const CharacterRow = React.memo(({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Character', {id: item.id})}>
      <Image
        style={{width: 100, height: 100}}
        source={defaultImage} // ignorer dans le debug
        // source={{
        //   uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        // }}
      />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
});

export default CharacterRow;
