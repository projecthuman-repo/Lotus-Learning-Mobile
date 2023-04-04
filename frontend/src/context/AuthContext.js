import React, { createContext, useState } from 'react';

// This is the context that will be used to share data between components.
export const AuthContext = createContext();

// This is the provider that will be used to wrap the components that need to access the context.
// It is a functional component that returns a context provider.
// The provider takes a value prop that is an object with the data that will be shared.
// Login and logout are functions that will be used to update the userToken state. When backend is impleented these functions will make requests to the backend to get the token.
export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const login = () => {
        // This is where we would make a request to the backend to get the token. For now it is a random token.
        setUserToken('ioioioaid');
        setIsLoading(false);
    }

    const logout = () => {
        // This is where we would make a request to the backend to logout. For now it just sets the token to null.
        setUserToken(null);
        setIsLoading(false);
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}