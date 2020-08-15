import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { estiloText, estiloText2, estiloView } = Estilo;
  return (
    <View style={estiloView}>
        <Text style={ estiloText }>
          A
        </Text>
        <Text style={ estiloText2 }>
          B
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
  estiloText2:{
    fontSize: 40,
    backgroundColor: '#2A48FA',
    height: 60,
    width: 60,
  },
  estiloView: {
    flex: 1,
    backgroundColor: 'skyblue',
    height: 300,
    // alinhamento na vertical
    justifyContent: 'space-between',
    // alinhamento na horizontal
    alignItems: 'center',
    flexDirection: 'row',
  },
});
