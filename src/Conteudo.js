import React from "react";
import { ScrollView } from 'react-native';
import { estilos } from "./styleSheet/style";
import Item from "./Item";

function Conteudo() {
  let listaItems = [];
  
  let ArrayPaises = ["Brasil", "Portugal", "Chile", "EUA"];
  let ArrayCoresFundo = ["blue", "green", "red", "darkblue"];
  let ArrayCoresFonte = ["white", "yellow", "white", "white"];
  let ArrayHabitantes = ["214 Mi", "10 Mi", "19 Mi", "331 Mi"];
  let ArrayPIB = ["1.6 Tri", "250 Bi", "317 Bi", "23 Tri"];
  
  let ArrayImagens = [
    require("../img/brasil.png"),
    require("../img/portugal.png"),
    require("../img/chile.png"),
    require("../img/eua.png")
  ];

  for (let i = 0; i < ArrayPaises.length; i++) {
    listaItems.push(
      <Item 
        key={i}
        nomePais={ArrayPaises[i]}
        corFundo={ArrayCoresFundo[i]}
        corFonte={ArrayCoresFonte[i]}
        habitantes={ArrayHabitantes[i]}
        pib={ArrayPIB[i]}
        imagemPais={ArrayImagens[i]}
      />
    );
  }

  return (
    <ScrollView style={estilos.conteudo}>
      {listaItems}
    </ScrollView>
  );
}

export default Conteudo;