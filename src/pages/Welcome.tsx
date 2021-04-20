import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions 
} from 'react-native'; 
import { Feather } from '@expo/vector-icons';

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

      <Image 
        source={wateringImg} 
        style={styles.image} 
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça mais e regar suas platas.
        Nós cuidamos de lembrar você sempre que precisar.  
      </Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>
          <Feather name="chevron-right" style={ styles.buttonIcon }/>
        </Text>
      </TouchableOpacity>    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 52,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  }
});