import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';


const AppNav = () => {

    const {isLoading, userToken} = useContext(AuthContext);

    if( isLoading ) {
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }

    return (
        <NavigationContainer>
            { userToken !== null ? <AppStack/>:<AuthStack/> }
        </NavigationContainer>
    )
}

export default AppNav
