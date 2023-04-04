import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// The AuthStack is the stack of screens that the user sees before they have logged in.
import Login from '../login/Login';
import Register from '../register/Register'

// Create the stack navigator.
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        // The screenOptions prop is used to set the default options for all screens in the stack.
        // In this case we are hiding the header and disabling the animation since we are switching between two screens.
        <Stack.Navigator 
            screenOptions={{headerShown: false, animation: 'none'}}
        >
            <Stack.Screen 
                name="Login" 
                component={Login} />
            <Stack.Screen 
                name="Register"
                component={Register} />
      </Stack.Navigator>
    );
}

export default AuthStack;