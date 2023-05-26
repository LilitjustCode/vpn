import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../pages/auth/AuthScreen';
import MainScreen from '../pages/main/MainScreen';
import ChoseLocation from '../pages/choselocation/ChoseLocation';
import PremiumScreen from '../pages/premium/PremiumScreen';
import { getData } from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';



const Stack = createStackNavigator();


const RootNavigation = ({initialRouteName}) => {
    
    const [result, setResult] = useState([])
    const dispatch = useDispatch()

    const [s,setS] = useState(initialRouteName)
   
    console.log(s)
    const getDate = async (set_interval) => {
        try {
            const value = await AsyncStorage.getItem('name');
            const ids = await AsyncStorage.getItem('country_id');
            const phone_code = await AsyncStorage.getItem('phone_id');
            const code = await AsyncStorage.getItem('code');
            if (value && ids && phone_code && code) {
                var formdata = new FormData();
                formdata.append('phone_code', phone_code);
                formdata.append('code', code);
                formdata.append('country_id', ids);
                formdata.append('set_interval', set_interval);
                var requestOptions = {
                    method: 'POST',
                    redirect: 'follow',
                    body: formdata,
                };

                fetch(
                    'https://vpnqlife.justcode.am/api/activate_new_code',
                    requestOptions,
                )
                    .then(response => response.json())
                    .then(async result => {
                        dispatch(getData(result));
                        if(result.status){
                            setS('MainScreen')
                            console.log(s,100)
                            await AsyncStorage.setItem('token',"token")
                            await AsyncStorage.setItem('endDate', result.data?.end_date)
                            let data =new Date(result.data?.end_date)
                            await AsyncStorage.setItem('date1',JSON.stringify(data))
                        }
                        else {
                            // await AsyncStorage.setItem('token',"")
                            await AsyncStorage.setItem('date1','')
                        }
                        setResult(result)
                    })

            }

        } catch (e) { }
    };

    useEffect(()=>{
        let interval = setInterval(()=>{
          getDate('set_interval');
        },180000)
        return () => clearInterval(interval)
      },[])

      console.log(s,'ss')
    return  false ?
        (<NavigationContainer>
            <Stack.Navigator
                initialRouteName={s}
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                {/* <Stack.Screen
                    name="AuthScreen"
                    component={AuthScreen}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                /> */}

                {/* <Stack.Screen
                    name="ChoseLocation"
                    component={ChoseLocation}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                />
                <Stack.Screen
                    name="PremiumScreen"
                    component={PremiumScreen}
                    options={({ route }) => ({
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    })}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>)
        : (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={s}
                    screenOptions={{
                        headerShown: false,
                    }}>
                    
                    <Stack.Screen
                        name="MainScreen"
                        component={MainScreen}
                        options={({ route }) => ({
                            tabBarButton: () => null,
                            tabBarStyle: { display: 'none' },
                        })}
                    />
                    <Stack.Screen
                        name="AuthScreen"
                        component={AuthScreen}
                        options={({ route }) => ({
                            tabBarButton: () => null,
                            tabBarStyle: { display: 'none' },
                        })}
                    />
                    <Stack.Screen
                        name="ChoseLocation"
                        component={ChoseLocation}
                        options={({ route }) => ({
                            tabBarButton: () => null,
                            tabBarStyle: { display: 'none' },
                        })}
                    />
                    <Stack.Screen
                        name="PremiumScreen"
                        component={PremiumScreen}
                        options={({ route }) => ({
                            tabBarButton: () => null,
                            tabBarStyle: { display: 'none' },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>)

};

export default RootNavigation;