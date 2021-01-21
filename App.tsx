import React, {useState} from 'react';
import {enableScreens} from "react-native-screens"
import AppLoading from 'expo-app-loading';
import {Provider} from 'react-redux';
import * as Font from "expo-font";

import {RootDrawerNavigation} from "./navigation/RootDrawerNavigation";
import {store} from "./store/store";

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
        <Provider store={store}>
            <RootDrawerNavigation/>
        </Provider>
    );
}
