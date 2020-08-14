import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.link}>Menu</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.tex}>Application</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.tex}>Application</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.tex}>Application</Text>
      </View>
      <View style={styles.rodape}>
        <Text style={styles.text}>Todos os direitos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836FFF',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  bloco:{
    alignItems: 'flex-start',
    width: 210,
    height: 50,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  tex:{
    alignItems: 'center',
    color: '#000',
    fontSize: 20,
  },
  menu:{
    alignItems: 'center',
    width: 350,
    height: 60,
    backgroundColor: '#6A5ACD',
    paddingTop: 10,
    paddingBottom: 5,
  },
  link:{
    fontSize: 50,
    color: '#fff',
    alignItems: 'center'
  },
  rodape:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 350,
    height: 60,
  },
  text:{
    fontSize: 15,
    color: '#fff'
  }
});
