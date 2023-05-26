import React, {useEffect, useState, useRef} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
  PanResponder,
  Easing,
} from 'react-native';
import Logo from '../../../assets/images/svg/premium/Logo';

export default function App({}) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.premiumText}>Get Premium today</Text>
      <Text style={styles.text}>Remove ads and unlock all locations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    height: 147,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  premiumText: {
    fontSize: 20,
    color: 'white',
    marginTop: 8,
    fontWeight: '500',
  },
  text: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
    fontWeight: '500',
  },
});
