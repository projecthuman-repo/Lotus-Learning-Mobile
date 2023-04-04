import React, { useContext } from 'react'
// ActivityIndicator is a component that shows a loading spinner.
import { View, ActivityIndicator } from 'react-native';
// NavigationContainer is the root component of the navigation tree. It manages the navigation state and contains the navigation context.
import { NavigationContainer } from '@react-navigation/native';

// Import the AuthContext so we can check if the user is logged in.
// If the user is logged in we will show the AppStack, otherwise we will show the AuthStack.
// The AppStack is the stack of screens that the user sees after they have logged in.
// The AuthStack is the stack of screens that the user sees before they have logged in.
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNav = () => {

    // Get the userToken and isLoading from the AuthContext.
    const {isLoading, userToken} = useContext(AuthContext);

    // If the app is still loading, show a loading spinner.
    if( isLoading ) {
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }

    // If the user is logged in, show the AppStack. Otherwise show the AuthStack.
    return (
        <NavigationContainer>
            { userToken !== null ? <AppStack/>:<AuthStack/> }
        </NavigationContainer>
    )
}

export default AppNav
