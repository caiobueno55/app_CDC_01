import React from "react";
import { ScrollView } from 'react-native';
import { estilos } from "./styleSheet/style";
import Item from "./Item";

export default function Conteudo() {
  let listaItens = [];
  const dados = [
    { nome: "Japão", bg: "green", txt: "yellow" },
    { nome: "Portugal", bg: "blue", txt: "black" },
    { nome: "Itália", bg: "darkred", txt: "yellow" },
    { nome: "Alemanha", bg: "gray", txt: "green" },
    { nome: "Egito", bg: "blue", txt: "white" },
    { nome: "Síria", bg: "yellow", txt: "green" },
  ];

  for (let i = 0; i < dados.length; i++) {
    listaItens.push(
      <Item 
        key={i} 
        nomePais={dados[i].nome} 
        corFundo={dados[i].bg} 
        corFonte={dados[i].txt} 
      />
    );
  }

  return (
    <ScrollView style={estilos.corpo}>
      {listaItens}
    </ScrollView>
  );
}