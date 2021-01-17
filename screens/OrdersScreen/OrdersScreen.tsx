import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './OrdersScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import { DrawerActions } from '@react-navigation/native';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import Button from "../../components/basicComponents/Button/Button";
import {Order} from "../../models/Order";
import OrderListItem from "../../components/OrderListItem/OrderListItem";

type Props = StackScreenProps<OrderStackNavigation, 'Orders'>;

const OrdersScreen = ({route, navigation}: Props) => {
    const orders = useSelector((state: RootState)=>state.orders.orders);

    const renderOrderItems= ({item}: {item: Order}) => {
        return <OrderListItem order={item} />
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Menu'}
                        iconName={'ios-menu'}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                    />
                </HeaderButtons>
            )
        });
    }, [navigation]);

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Orders</Text>
            </View>
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
