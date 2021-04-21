import React from 'react';
import { 
  StyleSheet,
  View, 
  Text,
  Image, 
} from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false}: EnviromentButtonProps) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

  },
});