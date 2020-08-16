import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const botaoPress = () => {
    var numAle = Math.floor(Math.random()* 5);
    var frases = [
      'O importante não é vencer todos os dias, mas lutar sempre.',
      'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
      'É melhor conquistar a si mesmo do que vencer mil batalhas.',
      'Quem ousou conquistar e saiu pra lutar, chega mais longe!',
      'Enquanto houver vontade de lutar haverá esperança de vencer.'
    ];
    Alert.alert(frases[numAle]);
}
export default function App() {
  const { principal, botao, textBot } = Estilo;
  return (
    <View style={principal}>
      <Image source={ require('./imgs/logo.png')} style={{width:253, height:140}} />
      <TouchableOpacity 
          onPress={botaoPress}
          style={botao}>
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
