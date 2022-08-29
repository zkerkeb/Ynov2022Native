import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const defaultImage =
  'https://mj-gallery.com/eb525a45-7776-47e5-9c79-ed9c995f3d0a/grid_0.png';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          defaultSource={{uri: defaultImage}} // ignorer dans le debug
          source={{uri: props.image ? props.image : defaultImage}}
          style={styles.image}
        />
      </View>
      <Text style={styles.cardText}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageContainer: {
    marginRight: 12,
  },
});

export default Card;
