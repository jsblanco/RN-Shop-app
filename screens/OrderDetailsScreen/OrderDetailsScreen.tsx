import React from 'react';
import {View} from 'react-native';
import styles from './OrderDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
type Props = StackScreenProps<OrderStackNavigation, 'OrderDetails'>;


const OrderDetailsScreen = ({route, navigation}: Props) => {

    return (
        <View style={styles.screen}>
            <Text>OrderDetailsScreen works!</Text>
        </View>
    )
}


export default OrderDetailsScreen;
