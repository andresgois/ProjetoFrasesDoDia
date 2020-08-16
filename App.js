import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  const { principal,image } = Estilo;
  return (
    <View style={principal}>
      {/* <Image style={image} source={ require('./imgs/uvas.png') }>
        <Text>Legenda da foto</Text>
      </Image> */}
      {/* <Image source={{uri: 'http://localhost:19006/img/uvas.png'}} /> */}
      <ImageBackground style={image} source={ require('./imgs/uvas.png')}>
        <Text>Legenda da foto</Text>
      </ImageBackground>
    </View>
  );
}

const Estilo = StyleSheet.create({
  principal:{
    padding: 40,
  }, 
  image:{
    width:150,
    height: 150,
    justifyContent: 'center',
  }
});
