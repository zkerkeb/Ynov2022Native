import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {NavigationButton} from '../../components/button';

// on cree la page et on ne fait de rien de complexe
// on verifie juste que sa fonctionne

// on cree un bouton (toucableOpacity) qui appelle en "onPress" le changement de
// page en precisant la page de destination dans le :
//     props.navigation.navigate('Characters')

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Page Login</Text>
      <NavigationButton
        onPress={() => navigation.navigate('Characters')}
        label="To characters"
      />
    </View>
  );
};

export default Login;
