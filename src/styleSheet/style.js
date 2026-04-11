import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  fundo: {
    flex: 1, 
    backgroundColor: '#e0e0e0', // Fundo cinza claro
    marginTop: 25, 
    paddingHorizontal: 10, 
    paddingVertical: 10,
  },
  cabecalho: {
    flex: 0.35, 
    backgroundColor: '#001f3f', // Azul Marinho conforme solicitado
    flexDirection: "column-reverse", 
    borderTopStartRadius: 25,
    borderTopEndRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    borderWidth: 2, 
    borderColor: "#FFD700", // Borda Dourada
  },
  cabimagem: {
    width: 130, 
    height: 130,
  },
  cabTitulo: {
    color: '#FFD700', // Título Dourado
    fontSize: 30,
    fontWeight: 'bold',
  },
  cabSubTitulo: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  corpo: {
    flex: 0.65, 
    backgroundColor: 'white',
  },
  rodape: {
    flex: 0.15, 
    backgroundColor: '#001f3f', // Azul Marinho
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around',
    borderTopWidth: 2,
    borderTopColor: '#FFD700',
  },
  rodTexto: {
    color: '#FFD700', // Texto Dourado (Caio Bueno e Data)
    fontSize: 18, 
    fontWeight: 'bold',
  }
});