import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './OrderDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Product} from "../../models/Product/Product";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/basicComponents/Button/Button";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {Order} from "../../models/Order/Order";

type Props = StackScreenProps<ShoppingStackNavigation, 'OrderDetails'>;


const OrderDetailsScreen = ({route, navigation}: Props) => {

    const {orderId} = route.params

    let orderDetails: Order | undefined
    orderId
        ? orderDetails = useSelector((state: RootState) => state.orders.orders.find((order: Order) => order.id === orderId))
        : orderDetails = useSelector((state: RootState) => state.orders.orders[0])


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Menu'} iconName={'arrow-back-sharp'}
                          onPress={navigation.popToTop}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    if (!orderDetails) {
        return (
            <View style={styles.screen}>
                <Text>No such order</Text>
            </View>
        )
    }

    const date = orderDetails.date.getDate() + '/' + ("0" + (1 + orderDetails.date.getMonth())).slice(-2) + '/' + orderDetails.date.getFullYear();
    const renderCartItems = ({item}: { item: { product: Product, amount: number } }) => {
        return <CartItem item={item} hideIcons={true}/>
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text>Order ID: {orderDetails.id}</Text>
                <Text>Order completed on: {date}</Text>
                <Button onPress={navigation.popToTop}>Return</Button>
            </View>
            <FlatList
                data={orderDetails.purchases}
                style={styles.flatList}
                renderItem={renderCartItems}
                keyExtractor={item => item.product.id}
            />
        </View>
    )
}


export default OrderDetailsScreen;
