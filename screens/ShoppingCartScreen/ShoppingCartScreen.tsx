import React from 'react';
import {View} from 'react-native';
import styles from './ShoppingCartScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
type Props = StackScreenProps<ShoppingStackNavigation, 'ShoppingCart'>;

const ShoppingCartScreen = ({route, navigation}: Props) => {

    return (
        <View style={styles.screen}>
            <Text>ShoppingCartScreen works!</Text>
        </View>
    )
}


export default ShoppingCartScreen;
