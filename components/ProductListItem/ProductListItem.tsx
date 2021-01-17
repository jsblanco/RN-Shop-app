import React, {useCallback} from 'react';
import {Image, Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {Product} from "../../models/Product";
import styles from './ProductListItem.styles';
import Text from "../../components/basicComponents/Text/Text";
import Button from "../basicComponents/Button/Button";
import {Ionicons} from "@expo/vector-icons";
import colours from "../../constants/colours";
import {useDispatch} from "react-redux";
import * as actions from '../../store/actions/products.actions'


const ProductListItem = ({product, onClickDetails}: { product: Product, onClickDetails: () => void }) => {

    const dispatch = useDispatch()
    let CustomButton: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) CustomButton = TouchableNativeFeedback;

    const addToCart = useCallback(() => {
        dispatch(actions.addToCart(product.id))
    }, [product])

    return (
        <View style={styles.screen}>
            <CustomButton onPress={onClickDetails} useForeground={true}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: product.imageUrl}} style={styles.image}/>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                        <Text style={styles.price}>{product.price.toFixed(2)} €</Text>
                    </View>
                    <View style={styles.actionsBar}>
                        <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                                onPress={(onClickDetails)}>
                            <Ionicons name={"search-outline"} size={16} color={colours.brightAccent}/>{'  '}
                            View details
                        </Button>
                        <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                                onPress={addToCart}>
                            <Ionicons name={"cart-outline"} size={16} color={colours.brightAccent}/>{'  '}
                            Add to cart
                        </Button>
                    </View>
                </View>
            </CustomButton>
        </View>
    )
}

export default ProductListItem;
