// This is the main file of the application. It is the entry point of the application.
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

// Contexts are used to share data between components. In this case we are sharing the user's authentication token (and other related props).
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';

// The main App component. It wraps the AppNav component in the AuthProvider context.
function App() {
  return (
    <AuthProvider>
      <StatusBar hidden />
      <AppNav/>
    </AuthProvider>
  );
}

export default App;
