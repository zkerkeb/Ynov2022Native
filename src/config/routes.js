import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import Login from '../screens/login';
import Characters from '../screens/characters';

const Stack = createNativeStackNavigator();

const Routes = () => {
  // {/* engloble l'app et envoi les props necessaire */}
  //   {/* on cree un navigator qui va servir les scree  */}
  //   {/* on cree des Screen qui vont servir les composants  */}
  //   {/* On essaye de garder la meme nomenclature d'ecriture pour le nom des pages*/}
  //   {/* -> "screenOptions" permet de suprimer le header*/}
  //   {/* -> "Dimensions" permet de recuperer les dimensions du telephone*/}
  //   {/*       -> a voire dans les imports*/}
  //   {/* */}

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Characters" component={Characters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
