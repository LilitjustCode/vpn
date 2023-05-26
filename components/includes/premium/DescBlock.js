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

export default function App({desc, name, svg}) {
  return (
    <View
      style={[
        styles.container,
        name === 'Secure' ? {borderBottomWidth: 0} : '',
      ]}>
      <View style={styles.block}>
        {svg}
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <Text style={styles.descText}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomColor: 'rgba(255, 255, 255, 0.25)',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  descText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: '400',
  },
  nameText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
    fontWeight: '500',
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
