import React from 'react';
import { View, Text } from 'react-native';

export default function Item(props) {
  return (
    <View style={{ 
      backgroundColor: props.corFundo, 
      marginTop: 10, 
      height: 100, 
      width: '100%', 
      justifyContent: 'center', 
      paddingLeft: 10,
      borderTopEndRadius: 20 
    }}>
      <Text style={{ color: props.corFonte, fontSize: 22, fontWeight: 'bold' }}>
        {props.nomePais}
      </Text>
    </View>
  );
}