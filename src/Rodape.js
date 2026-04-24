import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './styleSheet/style';

export default function Rodape(props) {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodAutor}>{props.nomeAutor}</Text>
      <Text style={estilos.rodAutor}>{props.dataAtual}</Text>
    </View>
  );
}