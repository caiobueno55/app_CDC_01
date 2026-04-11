import React from 'react';
import { View, Text } from 'react-native';

function Item(props) {
  return (
    <View style={{ 
      backgroundColor: props.corFundo, 
      marginTop: 10, 
      height: 110, 
      width: '100%', 
      justifyContent: 'center', 
      paddingLeft: 20,
      borderRadius: 10 
    }}>
      <Text style={{ color: props.corFonte, fontSize: 24, fontWeight: 'bold' }}>
        {props.nomePais}
      </Text>
      <Text style={{ color: props.corFonte, fontSize: 13 }}>
        População: {props.populacao} | PIB: {props.pib}
      </Text>
    </View>
  );
}
export default Item;