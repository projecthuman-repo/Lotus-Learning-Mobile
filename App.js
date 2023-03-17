import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import isAuthenticated from './utils/isAuthenticated';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return(
    <Text>Open</Text>
  );
};
const SettingsScreen = () => {
  return(
    <Text>Open</Text>
  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.viewport}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// style={styles.viewport}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
