import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';

import { closeLocation, getData } from '../../../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  const storeData = async () => {
    try {
      await AsyncStorage.setItem('code', value);

    } catch (e) {
      // saving error
    }
  };

  const getCode = async () => {
    console.log(99)
    const phone_code = await AsyncStorage.getItem('phone_id');
    const country_id = await AsyncStorage.getItem('country_id');
    if (phone_code && country_id && value) {
      storeData()
      var formdata = new FormData();
      formdata.append('phone_code', phone_code);
      formdata.append('code', value);
      formdata.append('country_id', country_id);
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        body: formdata,
      };

      fetch(
        'https://adminserve.ru/api/activate_new_code',
        requestOptions,
      )
        .then(response => response.json())
        .then(async result => {
          dispatch(getData(result));
          if (result.message == 'Your code Activated') {
            console.log('20001')
            navigation.navigate('MainScreen');
            await AsyncStorage.setItem('token',"token")
          } else {
            dispatch(closeLocation());
          }
        })
        .catch(error => console.log('error', error));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => dispatch(closeLocation())}
      style={styles.popupContainer}>
      <View style={styles.whiteBlock}>
        <View style={styles.block}>
          <Text style={styles.mainText}>Код доступа:</Text>
          <View style={styles.grayBlock}>
            <TextInput
              placeholder=""
              style={styles.input}
              value={value}
              onChangeText={text => setValue(text)}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              getCode();

              // navigation.navigate('MainScreen')
            }}
            style={styles.banner}>
            <LinearGradient
              colors={['#0072FF', '#00C6FF']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>ПРОВЕРИТЬ КОД</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
    justifyContent: 'center',
  },
  whiteBlock: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  block: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  grayBlock: {
    width: '100%',
    height: 64,
    backgroundColor: '#565859',
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  input: {
    width: '100%',
    backgroundColor: '#878B8C',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 1,
    color: '#000000',
  },
  linearGradient: {
    width: 201,
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
