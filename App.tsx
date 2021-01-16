import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {enableScreens} from "react-native-screens"
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font"
import {RootDrawerNavigation} from "./navigation/RootDrawerNavigation";
enableScreens();


const fetchFonts = () => Font.loadAsync({
  'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (!fontsLoaded) {
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(e: object) => console.log(e)}
    />
  }

  return (
    <RootDrawerNavigation />
  );
}
