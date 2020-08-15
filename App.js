import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
        <Text style={ Estilo.estiloText }>
          Frases do Dia
        </Text>
    </View>
  );
}

const Estilo = StyleSheet.create({
  estiloText:{
    fontSize: 30,
    backgroundColor: '#08509B',
    shadowColor: '#000',
    paddingTop: 5,
    paddingBottom: 5,
    shadowOffset: {width:-5, height:25},
    shadowOpacity: 0.4,
    shadowRadius: 8,
  }
});
