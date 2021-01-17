import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './OrdersScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Order} from "../../models/Order";
import OrderListItem from "../../components/OrderListItem/OrderListItem";

type Props = StackScreenProps<OrderStackNavigation, 'Orders'>;

const OrdersScreen = ({route, navigation}: Props) => {
    const orders = useSelector((state: RootState)=>state.orders.orders);

    const renderOrderItems= ({item}: {item: Order}) => {
        return <OrderListItem order={item} />
    }

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
