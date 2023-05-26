

import React, { useEffect, useState } from 'react';
// import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  StatusBarStyle,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { store } from './components/redux/store';
import { Provider, useSelector } from 'react-redux';
import RootNavigation from './components/navigation/RootNavigation';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SplashScreen from 'react-native-splash-screen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


function Section({ children, title }) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const TRANSITIONS = ['fade', 'slide', 'none'];
const STYLES = ['default', 'dark-content', 'light-content'];

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [hidden, setHidden] = useState(false);
  
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [initialRouteName,setInitialRouteName] = useState('')
  useEffect(()=>{
    getToken()
  },[])
  const getToken = async() =>{
        const token = await AsyncStorage.getItem('token');
        if (token){
          setInitialRouteName('MainScreen')
        }
        else {
          // console.log('AuthScreen')
          setInitialRouteName('AuthScreen')
        }
  }
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="#F5F9FA"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <RootNavigation initialRouteName = {initialRouteName} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

