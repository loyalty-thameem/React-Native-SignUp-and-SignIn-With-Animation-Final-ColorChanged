import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import RootStackScreen from './screens/RootStackScreen';

const App = () => {
  return (
        <NavigationContainer>
     <RootStackScreen/>
        </NavigationContainer>

  );
};
export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
