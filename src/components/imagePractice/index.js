import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';

import imageLocal from '../../assets/images/imageLocal.png';

const ImagePractice = () => {
  return (
    <ScrollView>
      <Image
        source={require('../../assets/images/imageLocal.png')}
        style={styles.image}
      />
      <Image source={imageLocal} style={styles.image} />
      <Image
        source={{
          uri: 'https://mj-gallery.com/a91fef56-ad07-474a-9f74-061589c9ebea/grid_0.png',
        }}
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default ImagePractice;
