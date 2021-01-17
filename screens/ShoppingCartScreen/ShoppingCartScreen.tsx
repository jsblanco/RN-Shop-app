import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './ShoppingCartScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";
import {Product} from "../../models/Product";
import Button from "../../components/basicComponents/Button/Button";

type Props = StackScreenProps<ShoppingStackNavigation, 'ShoppingCart'>;

const ShoppingCartScreen = ({route, navigation}: Props) => {

    const cartItems = useSelector((state: RootState) => state.products.cart)
    if (cartItems.length === 0) {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>ShoppingCartScreen works!</Text>
                <Text>Your cart is empty</Text>
            </View>
        )
    }

    const renderCartItems = ({item}: { item: { product: Product, amount: number } }) => {
        return <CartItem item={item}/>
    }

    let totalAmount = 0;
    cartItems.map(item => totalAmount += (item.product.price * item.amount))

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Shopping Cart</Text>
                <View style={styles.actionsRow}>
                    <Text style={styles.totalAmount}>Total:
                        <Text style={styles.bold}> {totalAmount.toFixed(2)}€</Text>
                    </Text>
                    <View>
                        <Button
                            buttonStyle={styles.button}
                            textStyle={styles.buttonText}
                            onPress={() => console.log(cartItems)}>Confirm purchase</Button>
                    </View>
                </View>
            </View>
            <FlatList
                data={cartItems}
                style={styles.flatList}
                renderItem={renderCartItems}
                keyExtractor={item => item.product.id}
            />
        </View>
    )
}


export default ShoppingCartScreen;
