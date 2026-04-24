import React from 'react';
import { View } from 'react-native';
import { estilos } from './src/styleSheet/style';
import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import Rodape from './src/Rodape';

export default function App() {
  let logo = require('./img/logo2.png'); 

  return (
    <View style={estilos.fundo}>
      <Cabecalho imagemLogo={logo} />
      <Conteudo />
      <Rodape nomeAutor="Caio e Fernando" dataAtual="19/04/2026" />
    </View>
  );
}