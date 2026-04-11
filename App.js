import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilos } from './src/styleSheet/style';
import Conteudo from './src/Conteudo';

export default function App() {
  // Verifique se a imagem existe na pasta img
  const imgLogo = require("./img/logo2.png"); 

  return (
    <View style={estilos.fundo}>
      {/* Cabeçalho montado diretamente para evitar erros de importação */}
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
        <Image source={imgLogo} style={estilos.cabimagem} />
        <Text style={estilos.cabTitulo}>FUNDAMENTOS II</Text>
      </View>

      <Conteudo />

      {/* Rodapé montado diretamente */}
      <View style={estilos.rodape}>
        <Text style={estilos.rodTexto}>Caio Bueno</Text>
        <Text style={estilos.rodTexto}>10/04/2026</Text>
      </View>
    </View>
  );
}