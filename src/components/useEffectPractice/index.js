import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UseEffectPractice = () => {
  const [count, setCount] = useState(0); // hook
  const [countTwo, setCountTwo] = useState(0); // hook

  useEffect(() => {
    console.log('count', count);
    // alert('count changed');
  }, [count]);

  return (
    <View>
      <Text>Use Effect Practice</Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{countTwo}</Text>
        <View style={styles.counterButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCountTwo(countTwo - 1)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCountTwo(countTwo + 1)}>
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

export default UseEffectPractice;
