import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationButton} from '../../components/button';
import defaultImage from '../../assets/images/default.jpeg';
import verifyIfUserIsConnected from '../../utils/verfiyIfUserIsConnected';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getFavorite from '../../utils/getFavorite';

// const defaultImage =
//   'https://mj-gallery.com/eb525a45-7776-47e5-9c79-ed9c995f3d0a/grid_0.png';

// on cree la page et on ne fait de rien de complexe
// on verifie juste que sa fonctionne

// on fait la meme chose que dans login , la meme logique
// le {navigation} est de la destructuration => decomposition d'un objet

const Characters = ({navigation}) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const offset = 30;

  useEffect(() => {
    verifyIfUserIsConnected(navigation);
  }, []);

  useEffect(() => {
    // facon differente de faire une requete API
    const getDatas = async () => {
      try {
        const result = await axios({
          method: 'GET',
          url: 'https://gateway.marvel.com/v1/public/characters',
          params: {
            ts: 1,
            apikey: '3d4b10bbed8eee1e581e206b349e509c',
            hash: '97b7858bc61f2402980b70c5bc13a86a',
            offset: offset * page, // si page = 0 => offset = 0 si page = 1 => offset = 30
            limit: 30,
          },
        });
        // on recupere les valeur que l'on veut dans la reponse de l'API
        setCharacters([...characters, ...result.data.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, [page]);

  const disconnect = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  const isInFavorite = async character => {};

  const AddOrRemoveToFavorite = async character => {
    const localFavorite = await getFavorite();
    console.log(localFavorite);
    const index = localFavorite.findIndex(item => item.id === character.id);
    console.log(index);
    if (index === -1) {
      localFavorite.push(character);
      await AsyncStorage.setItem('favorite', JSON.stringify(localFavorite));
    } else {
      localFavorite.splice(index, 1);
      await AsyncStorage.setItem('favorite', JSON.stringify(localFavorite));
    }
  };

  // const checkFavorite = async () => {
  //   const favorite = JSON.parse(await AsyncStorage.getItem('favorite'));
  //   console.log(favorite);
  // };

  return (
    <View>
      <Text>Page Characters</Text>
      <NavigationButton onPress={disconnect} label="Se deconnecter" />
      <NavigationButton
        onPress={() => navigation.navigate('Login')}
        label="To Login"
      />
      <NavigationButton
        onPress={() => navigation.navigate('Favorite')}
        label="To Favorite"
      />

      {/* <NavigationButton onPress={checkFavorite} label="CHECK Favorite" /> */}
      {/* on parcours notre resultat de requete pour afficher les donnees une a une */}
      {/** on vas faire une FlatList a la place pour etre plus prerfomant */}
      {/**  -> data: les donnees qu'on a recuperer de l'API */}
      {/**  -> KeyExtractor: sert d'index au sein de la data, permet de referencer chaque*/}
      {/**        element de data de facon dissocier*/}
      {/**  -> renderItem: comporte le rendu a afficher pour chaque element de data*/}
      {/**  etant donne que l'API marvel a un souci avec les images, on y placera */}
      {/**  une image par default */}

      <FlatList
        data={characters}
        keyExtractor={item => item.id}
        //   {/* permet d'executer une fonction quand on arrive au bout de la  */}
        //   {/**  flatList */}
        onEndReached={() => setPage(page + 1)}
        renderItem={({item}) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('Character', {id: item.id})}>
                <Image
                  style={{width: 100, height: 100}}
                  // defaultSource={defaultImage} // ignorer dans le debug
                  source={{
                    uri: 'https://s3.amazonaws.com/video-api-prod/assets/f313dd1bf578499ea1cfa804750283d5/SpicyMango.jpg',
                  }}
                  // source={{
                  //   uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  // }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => AddOrRemoveToFavorite(item)}
                style={{padding: 24}}>
                <Text>Add To favorite</Text>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

// {characters.map((character, index) => (
//   <TouchableOpacity
//     key={index}
//     onPress={() => navigation.navigate('Character', {character})}>
//     <Text>{character.name}</Text>
//   </TouchableOpacity>
// ))}

export default Characters;
