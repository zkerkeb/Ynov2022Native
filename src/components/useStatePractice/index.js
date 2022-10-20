import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UseStatePractice = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Vous avez cliqué ${count} fois`);
  }, [count]);

  return (
    <View>
      <Text>Use State Practice</Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{count}</Text>
        <View style={styles.counterButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count - 1)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCount(count + 1)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  counter: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  counterButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 12,
  },
});

export default UseStatePractice;
