import React from 'react';

import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import FlatListPractice from '../../components/flatListPractice';
import HarryPotterExercice from '../../components/harryPotterExercice';
import ImagePractice from '../../components/imagePractice';
import OptionalChainingPractice from '../../components/optionalChainingPractice';
import ScrollViewPractice from '../../components/scrollViewPractice';
import TextPractice from '../../components/TextPractice';
import TouchableOpacityPractice from '../../components/TouchableOpacityPractice';
import UseEffectPractice from '../../components/useEffectPractice';
import UseStatePractice from '../../components/useStatePractice';

const Practice = () => {
  return (
    <SafeAreaView>
      <HarryPotterExercice />
    </SafeAreaView>
  );
};

export default Practice;
