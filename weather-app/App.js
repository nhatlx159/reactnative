// App.js
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Weather from './components/Weather';

const App = () => {
  const image = {uri: 'https://cdn.vectorstock.com/i/1000x1000/07/81/seamless-weather-forecast-background-vector-2000781.webp'};
  return (
    <View style={styles.container}>
      <ImageBackground source= {image} resizeMode="cover" style={styles.image}></ImageBackground>
      <Weather />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});

export default App;
