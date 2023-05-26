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
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SignalIcon from '../../../assets/images/svg/auth/Signal';
import NotSelectedIcon from '../../../assets/images/svg/auth/NotSelected';
import SelectedIcon from '../../../assets/images/svg/auth/Selected';
import {openLocation} from '../../redux/actions/actions';
import LinearGradient from 'react-native-linear-gradient';

export default function App({name, image, navigation}) {
  const [selectName, setSelectName] = useState('');
  const [change, setChange] = useState(false);
  const {open_menu_bottom_sheet, close_menu_bottom_sheet} = useSelector(
    state => state.justDriveReducer,
  );

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.container}>
      <View style={styles.flagPart}>
        {name == 'NL' ? (
          <Image source={require('../../../assets/images/png/auth/NL.png')} />
        ) : name == 'US' ? (
          <Image source={require('../../../assets/images/png/auth/US.png')} />
        ) : name == 'RU' ? (
          <Image source={require('../../../assets/images/png/auth/FR.png')} />
        ) : (
          ''
        )}
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
          <SelectedIcon />
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
