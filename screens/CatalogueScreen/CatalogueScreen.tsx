import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {StackScreenProps} from "@react-navigation/stack";
import styles from './CatalogueScreen.styles';
import * as actions from "../../store/actions/products.actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Product} from "../../models/Product/Product";
import {Ionicons} from "@expo/vector-icons";
import colours from "../../constants/colours";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import Button from "../../components/basicComponents/Button/Button";
import {fetchProducts} from "../../store/actions/products.actions";
import Text from "../../components/basicComponents/Text/Text";
import {Simulate} from "react-dom/test-utils";
type Props = StackScreenProps<ShoppingStackNavigation, 'Catalogue'>;

const CatalogueScreen = ({route, navigation}: Props) => {

    const [isLoading, setIsLoading] = useState(false)
    const products = useSelector((state: RootState) => state.products.availableProducts);
    const error = useSelector((state: RootState) => state.products.error);
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        setIsLoading(true)
        await dispatch(fetchProducts.request)
        setIsLoading(false)
    }, [dispatch])


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', loadProducts)
        return unsubscribe;
    }, [loadProducts])

    if (error) {
        return (
            <View style={styles.screen}>
                <Text style={{color: 'tomato'}}>{error}</Text>
                <Button onPress={loadProducts}>Try again</Button>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator size={'large'} color={colours.brightAccent}/>
            </View>
        )
    }

    if (!isLoading && products.length === 0) {
        return (
            <View style={styles.screen}>
                <Text style={{color: colours.text.muted}}>There are no products on the platform</Text>
            </View>
        )
    }



    const renderProductList = ({item}: { item: Product }) => {
        const onSelect = () => navigation.navigate('ProductDetails', {productId: item.id});
        const addToCart = () => dispatch(actions.addToCart(item.id));
        return (
            <ProductListItem
                product={item}
                onSelect={onSelect}
            >
                <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                        onPress={(onSelect)}>
                    <Ionicons name={"search-outline"} size={16} color={colours.brightAccent}/>{'  '}
                    View details
                </Button>
                <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                        onPress={addToCart}>
                    <Ionicons name={"cart-outline"} size={16} color={colours.brightAccent}/>{'  '}
                    Add to cart
                </Button>
            </ProductListItem>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={{width: '100%',}}
                data={products}
                renderItem={renderProductList}
                keyExtractor={product => product.id}/>
        </View>
    )
}

export default CatalogueScreen;
