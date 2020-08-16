import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const alerta = ()=>{
  alert('Button pressionado!');
}
export default function App() {
  const { principal, botao, textBoao } = Estilo;
  return (
    <View style={principal}>
      <TouchableOpacity style={botao}>
        <Text style={textBoao}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

const Estilo = StyleSheet.create({
  principal:{
    padding: 40,
  },
  botao:{
    backgroundColor: '#48bbec',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  textBoao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    // centraliza o próprio objeto
    alignSelf: 'center',
  }
});
