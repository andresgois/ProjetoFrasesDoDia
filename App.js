import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { estiloText, estiloView } = Estilo;
  return (
    <View style={estiloView}>
        <Text style={ estiloText }>
          Frases do Dia
        </Text>
    </View>
  );
}

const Estilo = StyleSheet.create({
  estiloText:{
    fontSize: 40,
    backgroundColor: '#08509B',
    height: 60,
    width: 60,
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    // alinhamento na vertical
    justifyContent: 'flex-end',
    // alinhamento na horizontal
    alignItems: 'center',
  },
});
