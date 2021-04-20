import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'; 

import { Button } from '../components/Button';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais e regar suas platas.
        Nós cuidamos de lembrar você sempre que precisar.  
      </Text>

      <Button title="Butão" />    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 52,
  },
  image: {
    width: 292,
    height: 284,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
});