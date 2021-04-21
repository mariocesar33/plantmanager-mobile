import React from 'react';
import { 
  StyleSheet,
  View, 
  Text, 
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Text>Selecione Planta</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  }
});