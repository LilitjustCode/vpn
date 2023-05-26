import React, {useState} from 'react';

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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FaqIcon from '../../../../assets/images/svg/auth/FaqIcon';
import InfoIcon from '../../../../assets/images/svg/auth/InfoIcon';
import ReportIcon from '../../../../assets/images/svg/auth/ReportIcon';
import PolicyIcon from '../../../../assets/images/svg/auth/PolicyIcon';
import BackIcon from '../../../../assets/images/svg/auth/Back';
import {useSelector, useDispatch} from 'react-redux';
import {closeMenu} from '../../../redux/actions/actions';

const data = [
  {id: 1, svg: <FaqIcon />, text: 'Связаться'},
  {id: 2, svg: <InfoIcon />, text: 'О нас'},
  {id: 3, svg: <ReportIcon />, text: 'Оплатить'},
  {id: 4, svg: <PolicyIcon />, text: 'Privacy Policy'},
];

export default function App() {
  const dispatch = useDispatch();
  return (
    <View style={styles.popupContainer}>
      <View style={styles.whiteBlock}>
        <View style={styles.block}>
          <View style={styles.header}>
            <LinearGradient
              colors={['#0072FF', '#00C6FF']}
              style={styles.linearGradient}>
              <View style={styles.grayBlock}>
                <Text style={styles.buttonText}>SS24</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.mainMenuBlock}>
            <Text style={styles.mainMenuText}>Main Menu</Text>
            {data.map((value, index) => {
              return (
                <TouchableOpacity style={styles.faq} key={index}>
                  {value.svg}
                  <Text style={styles.faqText}>{value.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.backArrowBlock}>
            <TouchableOpacity onPress={() => dispatch(closeMenu())}>
              <BackIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text>v4.3.80.3</Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  popupContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteBlock: {
    width: '80%',
    height: '100%',
  },
  block: {
    backgroundColor: '#F5F9FA',
    width: '100%',
    height: '100%',
  },
  header: {
    padding: 20,
    marginTop: 24,
  },
  linearGradient: {
    width: '100%',
    height: 44,
    // padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 92,
  },
  grayBlock: {
    width: '100%',
    height: 24,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 1,
    color: '#252626',
  },
  mainMenuBlock: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  mainMenuText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 1,
    color: '#252626',
  },
  faq: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  faqText: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 7,
    color: '#252626',
  },
  backArrowBlock: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 49,
  },
  footer: {
    height: '35%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
