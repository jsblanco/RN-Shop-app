import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './OrderDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Product} from "../../models/Product";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/basicComponents/Button/Button";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions} from "@react-navigation/native";

type Props = StackScreenProps<ShoppingStackNavigation, 'OrderDetails'>;


const OrderDetailsScreen = ({route, navigation}: Props) => {

    const justOrdered = !!route.params.justOrdered
    const orderDetails = useSelector((state: RootState) => state.orders.orders[state.orders.orders.length - 1]);
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

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Menu'} iconName={'arrow-back-sharp'}
                          onPress={navigation.popToTop}/>
                </HeaderButtons>
            ),
        })
        ;
    }, [navigation]);

    const title = justOrdered ? 'Your order was completed successfully!' : 'Order details'
    const callToAction = justOrdered ? <Button onPress={navigation.popToTop}>Return to our catalogue</Button> : undefined;

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text>Order ID: {orderDetails.id}</Text>
                <Text>Order completed on: {date}</Text>
                {callToAction}
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
