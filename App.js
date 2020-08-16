import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { principal, cont1, cont2, cont3, abaLatEsq, abaLatDir } = Estilo;
  return (
    <View style={principal}>
      <View style={ cont1 }>
        <Text>   Menu       </Text>
      </View>
      <View style={ cont2 }>
        <View style={ abaLatEsq}>
          <Text>abaLatEsq</Text>
        </View>
        <View style={ abaLatDir}>
          <Text>abaLatDir</Text>
        </View>
      </View>
      <View style={ cont3 }>
        <Text>   Rodape       </Text>
      </View>
    </View>
  );
}

const Estilo = StyleSheet.create({
  principal:{
    flex:1,
    backgroundColor: 'cornflowerblue',
  }, 
  cont1:{
    flex:2,
    backgroundColor: 'brown',
  }, 
  cont2:{
    flex:8,
    backgroundColor: '#ccc',
    flexDirection: "row",
    justifyContent:"space-around",
  }, 
  cont3:{
    flex:1,
    backgroundColor: 'orangered',
  },
  abaLatEsq:{
    width:150,
    backgroundColor: '#fff',
  },
  abaLatDir:{
    width:150,
    backgroundColor: '#fff',
  }
});
