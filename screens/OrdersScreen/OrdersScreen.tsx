import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './OrdersScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Order} from "../../models/Order/Order";
import OrderListItem from "../../components/OrderListItem/OrderListItem";
import Text from "../../components/basicComponents/Text/Text";

type Props = StackScreenProps<OrderStackNavigation, 'Orders'>;

const OrdersScreen = ({route, navigation}: Props) => {
    const orders = useSelector((state: RootState)=>state.orders.orders);

    const renderOrderItems= ({item}: {item: Order}) => {
        return <OrderListItem order={item} />
    }

    if (orders.length===0) return <Text style={styles.noOrders}>You have made no orders</Text>;

    return (
        <View style={styles.screen}>
            <FlatList
                data={orders}
                style={styles.flatList}
                renderItem={renderOrderItems}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default OrdersScreen;
