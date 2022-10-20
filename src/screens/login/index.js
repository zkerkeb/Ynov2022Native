import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationButton} from '../../components/button';

// on cree la page et on ne fait de rien de complexe
// on verifie juste que sa fonctionne

// on cree un bouton (toucableOpacity) qui appelle en "onPress" le changement de
// page en precisant la page de destination dans le :
//     props.navigation.navigate('Characters')

const Login = ({navigation}) => {
  // creation des variable necessaire au login avec les useState
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // creation de la fonction qui vas envoyer les donnees a l'API
  const submitForm = () => {
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username,
        password,
      },
    })
      // permet d'attendre que la methode POST s'execute avant d'afficher les
      // donnee.
      //   ->async: permet d'utiliser le mot cle "await" au sein de la fonction
      .then(async res => {
        console.log(res);
        // on recupere le token place dans le header du resultat de la requete
        await AsyncStorage.setItem('token', res.headers['x-access-token']);
        // change la page pour acceder a la page 'Characters'
        navigation.navigate('Characters');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text>Page Login</Text>
      <NavigationButton
        onPress={() => navigation.navigate('Characters')}
        label="To characters"
      />
      {/* creation du formulaire (comme dans todolist)*/}
      <View>
        <Text>Username</Text>
        <TextInput onChangeText={setUsername} value={username} />
        <Text>Password</Text>
        <TextInput onChangeText={setPassword} value={password} />
      </View>
      <NavigationButton label="SUBMIT" onPress={submitForm} />
    </View>
  );
};

export default Login;
