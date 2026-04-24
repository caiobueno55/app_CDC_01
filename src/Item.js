import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Item(props) {
  let nomePais = props.nomePais;
  let corFundo = props.corFundo;
  let corFonte = props.corFonte;
  let imagem = props.imagemPais;

  return (
    <View style={{
      backgroundColor: corFundo, 
      marginTop: 10,
      height: 120, 
      width: '100%', 
      padding: 10 
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={imagem} style={{ width: 50, height: 35, marginRight: 15 }} />
        <Text style={{ color: corFonte, fontSize: 22, fontWeight: 'bold' }}>{nomePais}</Text>
      </View>
      <Text style={{ color: corFonte, marginTop: 5 }}>Habitantes: {props.habitantes}</Text>
      <Text style={{ color: corFonte }}>PIB: {props.pib}</Text>
    </View>
  );
}