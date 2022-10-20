import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {NavigationButton} from '../../components/button';

// on cree la page et on ne fait de rien de complexe
// on verifie juste que sa fonctionne

// on fait la meme chose que dans login , la meme logique
// le {navigation} est de la destructuration => decomposition d'un objet

const Characters = ({navigation}) => {
  return (
    <View>
      <Text>Page Characters</Text>
      <NavigationButton
        onPress={() => navigation.navigate('Login')}
        label="To Login"
      />
    </View>
  );
};

export default Characters;
