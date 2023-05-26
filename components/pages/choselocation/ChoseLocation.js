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
import BackArrow from '../../../assets/images/svg/location/BackArrow';
import Premium from '../../../assets/images/svg/location/Premium';
import LanguagesBlock from '../../includes/location/LanguagesBlock';
const data = [
  {
    id: 1,
    name: 'Auto',
    image: require('../../../assets/images/png/location/_globeicon.png'),
  },
  {
    id: 1,
    name: 'United States',
    image: require('../../../assets/images/png/location/US.png'),
  },
  {
    id: 2,
    name: 'Germany',
    image: require('../../../assets/images/png/location/DE.png'),
  },
  {
    id: 3,
    name: 'Australia',
    image: require('../../../assets/images/png/location/AU.png'),
  },
  {
    id: 4,
    name: 'India',
    image: require('../../../assets/images/png/location/IN.png'),
  },
  {
    id: 5,
    name: 'Canada',
    image: require('../../../assets/images/png/location/CA.png'),
  },
  {
    id: 6,
    name: 'Russia',
    image: require('../../../assets/images/png/location/FR.png'),
  },
  {
    id: 7,
    name: 'United kingdom',
    image: require('../../../assets/images/png/location/US.png'),
  },
  {
    id: 8,
    name: 'Japan',
    image: require('../../../assets/images/png/location/JP.png'),
  },
  {
    id: 9,
    name: 'China',
    image: require('../../../assets/images/png/location/CN.png'),
  },
  {
    id: 10,
    name: 'Netherlands',
    image: require('../../../assets/images/png/location/NL.png'),
  },
  {
    id: 7,
    name: 'United kingdom',
    image: require('../../../assets/images/png/location/US.png'),
  },
  {
    id: 8,
    name: 'Japan',
    image: require('../../../assets/images/png/location/JP.png'),
  },
  {
    id: 9,
    name: 'China',
    image: require('../../../assets/images/png/location/CN.png'),
  },
  {
    id: 10,
    name: 'Netherlands',
    image: require('../../../assets/images/png/location/NL.png'),
  },
];

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainScreen');
          }}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.locationText}>Choose Location</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PremiumScreen')}>
          <Premium />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, marginTop: 15, marginBottom: 35}}>
        {data.map((value, index) => {
          return (
            <LanguagesBlock key={index} image={value.image} name={value.name} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F5F9FA',
    height: '100%',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 20,
    color: '#252626',
    fontWeight: '500',
  },
});
