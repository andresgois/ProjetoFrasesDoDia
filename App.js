import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const botaoPress = () => {

}
export default function App() {
  const { principal, botao, textBot } = Estilo;
  return (
    <View style={principal}>
      <Image source={ require('./imgs/logo.png')} style={{width:253, height:140}} />
      <TouchableOpacity style={botao}>
        <Text style={textBot}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
}

const Estilo = StyleSheet.create({
  principal:{
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  textBot:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
