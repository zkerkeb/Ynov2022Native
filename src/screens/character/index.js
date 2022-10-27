import axios from 'axios';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

// creation de la page qui permetra la visualisation d'un personnage marvel
// on auras besoin de props pour pouvoir y preciser l'ID du personnage
const Character = ({route}) => {
  // alert(route.params.id);
  const [character, setCharacter] = React.useState({});

  useEffect(() => {
    // on fait une requete pour recuperer les informations du personnage
    // on utilise la meme methode que dans la page characters
    // on recupere l'ID du personnage dans les props
    // on fait une requete pour recuperer les informations du personnage
    axios({
      method: 'GET',
      url: `https://gateway.marvel.com/v1/public/characters/${route.params.id}`,
      params: {
        ts: 1,
        apikey: '3d4b10bbed8eee1e581e206b349e509c',
        hash: '97b7858bc61f2402980b70c5bc13a86a',
      },
    })
      .then(response => {
        setCharacter(response.data.data.results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>Page Character {route.params.id}</Text>
      <Text>{character.name}</Text>
      <Text>
        {character.description
          ? character.description
          : 'Pas de description disponible'}
      </Text>
    </View>
  );
};

export default Character;
