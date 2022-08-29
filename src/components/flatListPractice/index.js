import React from 'react';
import {FlatList} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

const FlatListPractice = () => {
  return (
    <FlatList
      data={fakeData}
      renderItem={props => <Text style={styles.item}>{props.item.text}</Text>}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f9c2ff',
    borderColor: 'black',
    borderWidth: 1,
  },
});

const fakeData = [
  {id: 1, text: 'Texte 1'},
  {id: 2, text: 'Texte 2'},
  {id: 3, text: 'Texte 3'},
  {id: 4, text: 'Texte 4'},
  {id: 5, text: 'Texte 5'},
  {id: 6, text: 'Texte 6'},
  {id: 7, text: 'Texte 7'},
  {id: 8, text: 'Texte 8'},
  {id: 9, text: 'Texte 9'},
  {id: 10, text: 'Texte 10'},
  {id: 11, text: 'Texte 11'},
  {id: 12, text: 'Texte 12'},
  {id: 13, text: 'Texte 13'},
  {id: 14, text: 'Texte 14'},
  {id: 15, text: 'Texte 15'},
  {id: 16, text: 'Texte 16'},
  {id: 17, text: 'Texte 17'},
  {id: 18, text: 'Texte 18'},
  {id: 19, text: 'Texte 19'},
  {id: 20, text: 'Texte 20'},
  {id: 21, text: 'Texte 21'},
  {id: 22, text: 'Texte 22'},
  {id: 23, text: 'Texte 23'},
  {id: 24, text: 'Texte 24'},
  {id: 25, text: 'Texte 25'},
  {id: 26, text: 'Texte 26'},
  {id: 27, text: 'Texte 27'},
  {id: 28, text: 'Texte 28'},
  {id: 29, text: 'Texte 29'},
  {id: 30, text: 'Texte 30'},
  {id: 31, text: 'Texte 31'},
  {id: 32, text: 'Texte 32'},
  {id: 33, text: 'Texte 33'},
  {id: 34, text: 'Texte 34'},
  {id: 35, text: 'Texte 35'},
  {id: 36, text: 'Texte 36'},
  {id: 37, text: 'Texte 37'},
  {id: 38, text: 'Texte 38'},
  {id: 39, text: 'Texte 39'},
  {id: 40, text: 'Texte 40'},
];

export default FlatListPractice;
