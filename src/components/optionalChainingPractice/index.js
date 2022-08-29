import React from 'react';
import {Text, View} from 'react-native';

const farm = {
  name: 'farm',
  animals: {
    cows: {qty: 20},
    pigs: {qty: 30},
    horse: {qty: 150},
  },
};

const OptionalChainingPractice = () => {
  return (
    <View>
      <Text>Optional Chaining Practice</Text>
      <Text>Vache: {farm.animals.cows.qty}</Text>
      <Text>Cochon: {farm.animals.pigs.qty}</Text>
      {/* <Text>
        Chevaux:{' '}
        {farm.animals.horse && farm.animals.horse.qty
          ? farm.animals.horse.qty
          : null}
      </Text> */}
      <Text>Chevaux: {farm.animals.horse?.qty}</Text>
    </View>
  );
};

export default OptionalChainingPractice;
