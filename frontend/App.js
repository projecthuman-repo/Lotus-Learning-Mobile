import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';


import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

function App() {
  return (
    <AuthProvider>
      <StatusBar hidden />
      <AppNav/>
    </AuthProvider>
  );
}

export default App;
