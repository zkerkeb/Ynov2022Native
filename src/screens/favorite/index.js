import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  // useFocusEffect(() => {
  //   const getFavorite = async () => {
  //     const favoriteLocal = (await AsyncStorage.getItem('favorite'))
  //       ? JSON.parse(await AsyncStorage.getItem('favorite'))
  //       : [];
  //     console.log(favoriteLocal);
  //     setFavorite(favoriteLocal);
  //   };
  //   getFavorite();
  // });

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {from: '0', size: '10'},
      headers: {
        'X-RapidAPI-Key': '2eb89bc3f1mshc34758fad5e37b3p17e518jsnd04e8741ce92',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <Text>Page Favorite</Text>
      {favorite.map(character => (
        <View key={character.id}>
          <Text>{character.name}</Text>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Favorite;
