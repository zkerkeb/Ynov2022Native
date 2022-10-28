import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import getFavorite from '../../utils/getFavorite';

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  useFocusEffect(() => {
    const getLocalFavorite = async () => {
      const favoriteLocal = await getFavorite();
      setFavorite(favoriteLocal);
    };
    getLocalFavorite();
  });

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
