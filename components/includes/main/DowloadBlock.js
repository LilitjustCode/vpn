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
import DownloadIcon from '../../../assets/images/svg/main/Download';
import UploadIcon from '../../../assets/images/svg/main/Upload';

export default function App({}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.downloadBlock}>
        <DownloadIcon />
        <View style={{marginLeft: 12}}>
          <Text style={styles.descText}>Download:</Text>
          <Text>120 MB</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.downloadBlock}>
        <UploadIcon />
        <View style={{marginLeft: 12}}>
          <Text style={styles.descText}>Upload:</Text>
          <Text>80 MB</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  downloadBlock: {
    width: '46%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descText: {
    fontSize: 12,
    color: '#878B8C',
    fontWeight: '400',
    lineHeight: 16,
  },
  mbText: {
    fontSize: 12,
    color: '#252626',
    fontWeight: '500',
    lineHeight: 16,
  },
});
