import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const alerta = ()=>{
  alert('Button pressionado!');
}
export default function App() {
  const { principal } = Estilo;
  return (
    <View style={principal}>
      <Button 
        title = "Clique Aqui!"
        color = "purple"
        accessibilityLabel = "label de acessibilidade"
        onPress = { alerta}
      />
    </View>
  );
}

const Estilo = StyleSheet.create({
  principal:{
    padding: 40,
  }
});
