import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo}/>
      <Text style = {styles.sibal}>
        코로나 시발련아</Text>
      <TouchableOpacity
      onPress = {() => alert('시발')}
      style = {styles.button}>
        <Text style = {styles.buttontext}>족같은 코로나</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width : 305,
    height : 159,
    marginBottom : 10,
  },
  sibal : {
    color : "red",
    fontSize : 50,
    marginHorizontal : 15,
  },
  button : {
    backgroundColor : "blue",
    padding : 20,
    borderRadius : 5,
  },
  buttontext : {
    fontSize : 20,
    color : '#fff',
  },
});
