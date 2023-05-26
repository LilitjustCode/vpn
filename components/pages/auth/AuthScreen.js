import React, { useEffect, useRef, useState } from 'react';

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
import MenuBarIcon from '../../../assets/images/svg/auth/MenuBar';
import GlobalIcon from '../../../assets/images/svg/auth/Global';
import LanguagesBlock from '../../includes/auth/LanguagesBlock';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../redux/actions/actions';
import MenuBarPopup from './Popup/MenuBar';
import LocationPopup from './Popup/LocationCode';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';


const data = [
  {
    id: 1,
    name: 'United States',
    image: require('../../../assets/images/png/auth/US.png'),
  },
  {
    id: 2,
    name: 'Russia',
    image: require('../../../assets/images/png/auth/FR.png'),
  },
  {
    id: 3,
    name: 'Netherlands',
    image: require('../../../assets/images/png/auth/NL.png'),
  },
];

export default function App({ navigation }) {
  const { open_menu_bottom_sheet, close_menu_bottom_sheet, open_location_popup } =
    useSelector(state => state.justDriveReducer);
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();
  const getCountries = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://adminserve.ru/api/get_country', requestOptions)
      .then(response => response.json())
      .then(result => {
        setResult(result);
      })
      .catch(error => console.log('error', error));
  };

  const getId = async () => {
    let phone_id = await DeviceInfo.getUniqueId();
    try {
      await AsyncStorage.setItem('phone_id', phone_id);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    getCountries();
    getId();
  }, []);
  const { allData } = useSelector(state => state.justDriveReducer);
 



  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => dispatch(closeMenu())}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={require('../../../assets/images/png/HomeScreen.png')}>
        {open_menu_bottom_sheet ? (
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.63)" />
        ) : (
          ''
        )}
        {open_location_popup ? (
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.63)" />
        ) : (
          ''
        )}
        <SafeAreaView style={styles.areastyles}>
          <View style={styles.header}>
            <TouchableOpacity onPress={(e) => {
              dispatch(openMenu())
            }
            }>
              <MenuBarIcon />
            </TouchableOpacity>
            <Text style={styles.headerText}>SS24</Text>
            <View></View>
          </View>
          <View style={styles.nameBlock}>
            <View style={styles.centerBlock}>
              <GlobalIcon />
              <Text style={styles.centerBlockText}>Select Location</Text>
            </View>
          </View>
          <ScrollView style={{ width: '100%', flex: 1, paddingHorizontal: 18 }}>
            {result?.data?.map((value, index) => {
              return (
                <LanguagesBlock  open={open_location_popup} key={index} name={value.name} id={value.id} />
              );
            })}
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.banner}>
              <LinearGradient
                colors={['#0072FF', '#00C6FF']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>МЕСТО ДЛЯ БАНЕРА</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {open_menu_bottom_sheet ? <MenuBarPopup /> : ''}
          {open_location_popup ? <LocationPopup navigation={navigation} /> : ''}
        </SafeAreaView>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  areastyles: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  header: {
    // width: '100%',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    color: '#252626',
  },
  nameBlock: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  centerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBlockText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#252626',
    marginLeft: 10,
  },
  footer: {
    padding: 18,
  },
  banner: {
    width: '100%',
  },
  linearGradient: {
    width: '100%',
    height: 80,
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
