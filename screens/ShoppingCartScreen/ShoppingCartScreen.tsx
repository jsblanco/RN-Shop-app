import React from 'react';
import {View} from 'react-native';
import styles from './ShoppingCartScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import Button from "../../components/basicComponents/Button/Button";

import * as actions from '../../store/actions/products.actions'

type Props = StackScreenProps<ShoppingStackNavigation, 'ShoppingCart'>;

const ShoppingCartScreen = ({route, navigation}: Props) => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.products.cart)


    return (
        <View style={styles.screen}>
            <Text>ShoppingCartScreen works!</Text>

            {/* Aquí implementarlo con una flatlist*/}
            {cartItems.length > 0
                ? <View style={{width: '100%', borderBottomWidth: 1}}>
                    {cartItems.map(item => {
                        return <View key={item.productId} style={{width: '100%', padding: 20, borderTopWidth: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{
                                    fontFamily: 'openSansBold',
                                    fontSize: 18
                                }}>{item.productId}: </Text>
                                <Text> {item.amount} </Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Button onPress={() => dispatch(actions.removeFromCart(item.productId))}>-1</Button>
                                <Button onPress={() => dispatch(actions.addToCart(item.productId))}>+1</Button>
                            </View>
                        </View>
                    })}
                </View>
                : <Text>Your cart is empty</Text>
            }
        </View>
    )
}


export default ShoppingCartScreen;
