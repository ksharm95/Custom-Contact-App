/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
}