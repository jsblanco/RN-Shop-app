import React from 'react';
import {View} from 'react-native';
import styles from './HomeScreen.styles';
import Text from "../../components/basicComponents/Text/Text";

const HomeScreen = (props: any) => {

    return (
        <View style={styles.screen}>
            <Text>HomeScreen works!</Text>
        </View>
    )
}


export default HomeScreen;
