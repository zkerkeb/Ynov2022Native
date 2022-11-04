import React from 'react';
import {MotiView, MotiText, useAnimationState} from 'moti';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const AnimationExample = () => {
  const {width} = Dimensions.get('window');
  const barAnimationState = useAnimationState({
    closed: {
      opacity: 0,
      translateX: -width,
    },
    open: {
      opacity: 1,
      translateX: 0,
    },
  });

  const onPress = () => {
    if (barAnimationState.current === 'closed') {
      barAnimationState.transitionTo('open');
    } else {
      barAnimationState.transitionTo('closed');
    }
  };
  return (
    <>
      <AnimatedView
        from={{
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          scale: {
            type: 'spring',
            delay: 100,
          },
        }}>
        <Text>Animatiooooon</Text>
      </AnimatedView>
      <AnimatedBar state={barAnimationState}>
        <Text>DES BOUTONS ICI</Text>
      </AnimatedBar>
      <TouchableOpacity onPress={onPress}>
        <Text>Lancer L'animation de menu</Text>
      </TouchableOpacity>
    </>
  );
};

const AnimatedBar = styled(MotiView)`
  width: 100%;
  height: 40px;
  background-color: green;
`;

const AnimatedView = styled(MotiView)`
  background-color: red;
`;

export default AnimationExample;
