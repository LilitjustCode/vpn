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


export default function App({name, image}) {
  const [selectName, setSelectName] = useState('');
  const [change, setChange] = useState(false);
  const {open_menu_bottom_sheet, close_menu_bottom_sheet} = useSelector(
    state => state.justDriveReducer,
  );

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        setSelectName(name);
        setChange(!change);
        // dispatch(openLocation());
      }}
      style={styles.container}>
      <View style={styles.flagPart}>
        <Image source={image} />
        <Text style={styles.flagName}>{name}</Text>
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
