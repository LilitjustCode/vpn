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
import BackArrow from '../../../assets/images/svg/premium/WhiteBackArrow';
import PremiumWhiteBlock from '../../includes/premium/PremiumWhiteBlock';
import PremiumBlock from '../../includes/premium/DescBlock';
import Anonymus from '../../../assets/images/svg/premium/Anonymus';
import Fast from '../../../assets/images/svg/premium/Fast';
import Remove from '../../../assets/images/svg/premium/Remove';
import Secure from '../../../assets/images/svg/premium/Secure';
import Arrow from '../../../assets/images/svg/premium/Arrow';

const data = [
  {
    id: 1,
    name: 'Anonymous',
    desc: 'Hide your IP. Anonymous surfing',
    svg: <Anonymus />,
  },
  {
    id: 2,
    name: 'Fast',
    desc: 'Up to 1000Mb/s bandwidth to explore',
    svg: <Fast />,
  },
  {
    id: 3,
    name: 'Remove Ads',
    desc: 'Have fun surfing without annoying ads',
    svg: <Remove />,
  },
  {
    id: 4,
    name: 'Secure',
    desc: 'Transfer traffic via encrypted tunnel',
    svg: <Secure />,
  },
];

export default function App({navigation}) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require('../../../assets/images/png/premium/PremuimScreen.png')}>
      <StatusBar backgroundColor="#0072FF" />
      <SafeAreaView style={styles.safecontainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChoseLocation')}>
            <BackArrow />
          </TouchableOpacity>
        </View>
        <PremiumWhiteBlock />
        {data.map((value, index) => {
          return (
            <PremiumBlock
              key={index}
              name={value.name}
              desc={value.desc}
              svg={value.svg}
            />
          );
        })}
        <TouchableOpacity style={styles.trasnparentButton}>
          <Text style={styles.everyText}>Every Month</Text>
          <Text style={styles.everyText}>$2.99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.getPremium}>
          <Text style={styles.text}>Get Premium Now</Text>
          <Arrow />
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Restore Purchases</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  safecontainer: {
    paddingHorizontal: 18,
    width: '100%',
  },
  header: {
    marginTop: 15,
  },
  trasnparentButton: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 8,
    height: 64,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  everyText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  getPremium: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 64,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 12,
  },
  footerText: {
    color: '#F5F9FA',
    fontSize: 14,
    fontWeight: '400',
  },
  text: {
    fontSize: 16,
    color: '#252626',
    fontWeight: '500',
    marginRight: 7,
  },
});
