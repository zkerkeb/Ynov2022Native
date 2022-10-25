import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationButton} from '../../components/button';
import LoginForm from '../../components/loginForm';

// on cree la page et on ne fait de rien de complexe
// on verifie juste que sa fonctionne

// on cree un bouton (toucableOpacity) qui appelle en "onPress" le changement de
// page en precisant la page de destination dans le :
//     props.navigation.navigate('Characters')

const Login = ({navigation}) => {
  // creation des variable necessaire au login avec les useState
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // creation d'un state qui vas recupere toute les donnees quelque soit leur
  // nombre
  const [inputs, setInputs] = React.useState({
    username: '',
    password: '',
  });

  // creation de la fonction qui vas envoyer les donnees a l'API
  const submitForm = () => {
    //    ->const {username, password} = inputs: destructuration de inputs pour
    // recuperer username et password en tant que variable separer
    const {username, password} = inputs;

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

      <LoginForm
        setInputs={setInputs}
        submitForm={submitForm}
        inputs={inputs}
      />
    </View>
  );
};

export default Login;
