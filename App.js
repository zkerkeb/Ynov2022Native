import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';

import Routes from './src/config/routes';

const App = () => {
  // {/* engloble l'app et envoi les props necessaire */}
  //   {/* on cree un navigator qui va servir les scree  */}
  //   {/* on cree des Screen qui vont servir les composants  */}
  //   {/* On essaye de garder la meme nomenclature d'ecriture pour le nom des pages*/}
  //   {/* -> "screenOptions" permet de suprimer le header*/}
  //   {/* -> "Dimension" permet de recuperer les dimensions du telephone*/}
  //   {/*       -> a voire dans les imports*/}
  //   {/* */}

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
