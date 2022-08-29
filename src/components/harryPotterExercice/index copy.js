import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView, Text, View} from 'react-native';
import Card from './card';

const HarryPotterExercice = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getCharacters();
    }, 2000);
  }, []);

  const getCharacters = async () => {
    axios({
      method: 'get',
      url: 'http://hp-api.herokuapp.com/api/characters/students',
    })
      .then(res => {
        console.log(res);
        setCharacters(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {characters.map(character => {
        return (
          <Card
            key={character.name}
            name={character.name}
            image={character.image}
          />
        );
      })}
    </ScrollView>
  );
};

export default HarryPotterExercice;
