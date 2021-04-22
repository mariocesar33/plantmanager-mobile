import React from 'react';
import { 
  StyleSheet,
  View, 
  Text,
} from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ 
  title, 
  active = false, 
  ...rest 
}: EnviromentButtonProps) {
  return (
    <RectButton style={[styles.container, active && styles.conteinerActive]} {...rest}>
      <Text style={[styles.text, active && styles.textActive]}>{ title }</Text>
    </RectButton>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  conteinerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
});