import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './styleSheet/style';

export default function Cabecalho(props) {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
      <Image source={props.imagemLogo} style={estilos.cabimagem} />
      <Text style={estilos.cabTitulo}>FUNDAMENTOS II</Text>
    </View>
  );
}