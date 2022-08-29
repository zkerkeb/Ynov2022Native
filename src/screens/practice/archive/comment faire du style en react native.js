import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Title from '../../../components/Title';

const Practice = () => {
  return (
    <View>
      <View style={styles.practice}>
        <Title title="Practice" />
      </View>
      <View style={styles.test}>
        <Title title="Test" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  practice: {
    backgroundColor: 'red',
  },
  test: {
    backgroundColor: 'blue',
  },
});

export default Practice;
