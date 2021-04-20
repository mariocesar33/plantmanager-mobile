import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  }
});