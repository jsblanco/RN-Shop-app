import React from 'react';
import {Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import styles from './OrderListItem.styles';
import Text from "../../components/basicComponents/Text/Text";
import {Order} from "../../models/Order";
import {useNavigation} from '@react-navigation/native';

const OrderListItem = ({order}: { order: Order }) => {

    let ButtonType: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) ButtonType = TouchableNativeFeedback;
    const date = order.date.getDate() + '/' + ("0" + (1 + order.date.getMonth())).slice(-2) + '/' + order.date.getFullYear();
    const navigator = useNavigation()
    const seeOrderDetails = () => {
        navigator.navigate('OrderDetails', {justPurchased: false, orderId: order.id})
    }

    return (
        <View style={styles.container}>
            <ButtonType onPress={seeOrderDetails} useForeground={true}>
                <View style={styles.screen}>
                    <View style={styles.orderData}>
                        <Text>Order id: {order.id}</Text>
                        <Text>Ordered on: {date}</Text>
                    </View>
                    <View style={styles.orderPrice}>
                        <Text>Price:</Text>
                        <Text style={styles.bold}>{order.price} €</Text>
                    </View>
                </View>
            </ButtonType>
        </View>
    )
}

export default OrderListItem;
