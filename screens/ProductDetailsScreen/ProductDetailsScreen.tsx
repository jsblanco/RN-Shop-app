import React, {useCallback} from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from './ProductDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import Button from "../../components/basicComponents/Button/Button";
import {Ionicons} from '@expo/vector-icons';
import * as actions from "../../store/actions/products.actions";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";

type Props = StackScreenProps<ShoppingStackNavigation, 'ProductDetails'>;

const ProductDetailsScreen = ({route, navigation}: Props) => {
    const product = useSelector((state: RootState) => state.products.availableProducts.find(product => product.id === route.params.productId))
    const dispatch = useDispatch()
    if (!product) return (
        <View style={styles.screen}>
            <Text>There is no such product in the catalogue.</Text>
            <Button onPress={() => navigation.goBack()}> Go back</Button>
        </View>
    );

    const addToCart = useCallback(() => {
        dispatch(actions.addToCart(product.id))
    }, [product])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: product.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add to cart'} iconName={'cart-outline'}
                          onPress={() => navigation.navigate('ShoppingCart')}/>
                </HeaderButtons>
            )
        });
    }, [navigation]);

    return (
        <ScrollView style={{marginBottom: 20}}>
            <View style={styles.screen}>
                <Image style={{height: 300, width: '100%',}} source={{uri: product.imageUrl}}/>
                <View style={styles.content}>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} €</Text>
                    <Text style={styles.description}>{product.description}</Text>
                        <Button onPress={addToCart}>
                            <Ionicons name={"cart-outline"} size={16} color={'white'}/>{' '}
                            Add to cart</Button>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetailsScreen;
