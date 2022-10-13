import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const StyledExemple = () => {
  return (
    <View>
      <Text>Styled components Exemple</Text>
      <Square size={200} color="green" />
      <Square size={50} color="blue" />
      <Square size={100} color="violet" />
      <Square size={100} />
    </View>
  );
};

const Square = styled.View`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  /* background-color: ${props => props.color}; */
  background-color: ${props =>
    props.color ? props.color : props.theme.secondary};
`;

export default StyledExemple;
