import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import styles from './OrdersScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Order} from "../../models/Order/Order";
import OrderListItem from "../../components/OrderListItem/OrderListItem";
import Text from "../../components/basicComponents/Text/Text";
import {fetchOrders} from "../../store/actions/orders.actions";
import Button from "../../components/basicComponents/Button/Button";
import colours from "../../constants/colours";

type Props = StackScreenProps<OrderStackNavigation, 'Orders'>;

const OrdersScreen = ({route, navigation}: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const orders = useSelector((state: RootState) => state.orders.orders);
    const error = useSelector((state: RootState) => state.orders.error);
    const dispatch = useDispatch()

    const loadOrders = useCallback(async () => {
        setIsRefreshing(true)
        await dispatch(fetchOrders.request())
        setIsRefreshing(false)
    }, [dispatch])


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', loadOrders)
        return unsubscribe;
    }, [loadOrders])

    useEffect(() => {
        setIsLoading(true)
        loadOrders().then(() => setIsLoading(false))
    }, [dispatch])

    if (error) {
        return (
            <View style={styles.screen}>
                <Text style={{color: 'tomato'}}>{error}</Text>
                <Button onPress={loadOrders}>Try again</Button>
            </View>
        )
    }

    if (isLoading || orders.length === 0) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size={'large'} color={colours.brightAccent}/>
            </View>
        )
    }
    /*
        if (!isLoading && orders.length === 0) {
            return (
                <View style={styles.screen}>
                    <Text style={{color: colours.text.muted}}>There are no orders on the platform</Text>
                </View>
            )
        }
    */

    const renderOrderItems = ({item}: { item: Order }) => {
        return <OrderListItem order={item}/>
    }

    if (orders.length === 0) return <Text style={styles.noOrders}>You have made no orders</Text>;

    return (
        <View style={styles.screen}>
            <FlatList
                onRefresh={loadOrders}
                refreshing={isRefreshing}
                data={orders}
                style={styles.flatList}
                renderItem={renderOrderItems}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default OrdersScreen;
