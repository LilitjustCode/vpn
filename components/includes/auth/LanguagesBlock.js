import React, {useState, useEffect} from 'react';

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
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SignalIcon from '../../../assets/images/svg/auth/Signal';
import NotSelectedIcon from '../../../assets/images/svg/auth/NotSelected';
import SelectedIcon from '../../../assets/images/svg/auth/Selected';
import {openLocation} from '../../redux/actions/actions';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({name, id,open}) {
  const [selectName, setSelectName] = useState('');
  const [change, setChange] = useState(false);
  const {open_menu_bottom_sheet, close_menu_bottom_sheet} = useSelector(
    state => state.justDriveReducer,
  );
  const dispatch = useDispatch();
  const storeData = async (name, id) => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('country_id', String(id));
    } catch (e) {
      // saving error
    }
  };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('name');
  //     const ids = await AsyncStorage.getItem('country_id');
  //     if (value !== null) {
  //       // value previously stored
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(()=>{
    if(!open){
      setSelectName('')
    }
  },[open])
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectName(name);
        storeData(name, id);
        setChange(!change);
        dispatch(openLocation());
      }}
      style={styles.container}>
      <View style={styles.flagPart}>
        <Image
          source={
            name == 'NL'
              ? require('../../../assets/images/png/auth/NL.png')
              : name == 'US'
              ? require('../../../assets/images/png/auth/US.png')
              : name == 'RU'
              ? require('../../../assets/images/png/auth/FR.png')
              : ''
          }
        />
        <Text style={styles.flagName}>
          {name == 'RU'
            ? 'Russia'
            : name == 'US'
            ? 'United States'
            : name == 'NL'
            ? 'Netherlands'
            : ''}
        </Text>
      </View>
      <View style={styles.selectedBlock}>
        <SignalIcon />
        <TouchableOpacity style={{marginLeft: 5}}>
          {selectName === name && change ? (
            <SelectedIcon />
          ) : (
            <NotSelectedIcon />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 48,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  flagPart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagName: {
    marginLeft: 15,
    color: '#747277',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  selectedBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
