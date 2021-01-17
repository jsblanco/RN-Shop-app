import React from 'react';
import {Image, Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import styles from './CartItem.styles';
import Text from "../../components/basicComponents/Text/Text";
import Button from "../basicComponents/Button/Button";
import * as actions from "../../store/actions/products.actions";
import {useDispatch} from "react-redux";
import {Product} from "../../models/Product";

const CartItem = ({item: {product, amount}}: { item: { product: Product, amount: number } }) => {

    const dispatch = useDispatch();
    const addOneToCart = () => dispatch(actions.addToCart(product.id))
    const removeOneFromCart = () => dispatch(actions.removeFromCart(product.id))
    let CustomButton: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) CustomButton = TouchableNativeFeedback;

    return (
        <View style={styles.screen}>
            <CustomButton onPress={() => console.log(product)} useForeground={true}>
                <View style={styles.container}>
                    <View style={styles.imageRow}>
                        <Image style={styles.image} source={{uri: product.imageUrl}}/>
                    </View>
                    <View style={styles.dataRow}>
                        <Text>{amount}  <Text style={styles.title}>{product.title} </Text></Text>
                        <Text>{product.price}€</Text>
                    </View>
                    <View style={styles.actionRow}>
                        <View style={{flexDirection: 'row'}}>
                            <Button
                                buttonStyle={styles.button} textStyle={styles.buttonText}
                                onPress={removeOneFromCart}>-1</Button>
                            <Button
                                buttonStyle={styles.button} textStyle={styles.buttonText}
                                onPress={addOneToCart}>+1</Button>
                        </View>

                        <Text style={styles.total}> {(amount * product.price).toFixed(2)}€ </Text>
                    </View>
                </View>
            </CustomButton>
        </View>
    )
}

export default CartItem;
