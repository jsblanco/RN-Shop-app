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
import * as productsActions from '../../store/actions/products.actions'
import * as orderActions from '../../store/actions/orders.actions'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import BottomRightButton from "../../components/basicComponents/BottomRightButton/BottomRightButton";

type Props = StackScreenProps<ShoppingStackNavigation, 'ShoppingCart'>;

const ShoppingCartScreen = ({route, navigation}: Props) => {

    const cartItems = useSelector((state: RootState) => state.products.cart)

    const dispatch = useDispatch();
    const emptyCart = () => dispatch(productsActions.emptyCart())
    const confirmOrder = () => {
        dispatch(orderActions.addOrder(cartItems));
        navigation.navigate('OrderDetails', {orderId: ''});
    }
    const renderCartItems = ({item}: { item: { product: Product, amount: number } }) => {
        return <CartItem item={item}/>
    }

    let totalAmount = 0;
    cartItems.map(item => totalAmount += (item.product.price * item.amount))

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.actionsRow}>
                    <Text style={styles.totalAmount}>Total:
                        <Text style={styles.bold}> {totalAmount.toFixed(2)}€</Text>
                    </Text>
                    <View>
                        {
                            !!totalAmount && <Button
                                buttonStyle={styles.button}
                                textStyle={styles.buttonText}
                                onPress={confirmOrder}>
                                Confirm purchase
                            </Button>
                        }
                    </View>
                </View>
            </View>
            <FlatList
                data={cartItems}
                style={styles.flatList}
                renderItem={renderCartItems}
                keyExtractor={item => item.product.id}
            />
            <BottomRightButton onPress={emptyCart}>
                <FontAwesomeIcon icon={faTrashAlt} color={'white'} size={22}/>
            </BottomRightButton>
        </View>
    )
}


export default ShoppingCartScreen;
