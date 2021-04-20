import React from 'react';
import { 
  TouchableOpacity,
  Text,
  TouchableOpacityProps, 
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Confirmar</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  }
});