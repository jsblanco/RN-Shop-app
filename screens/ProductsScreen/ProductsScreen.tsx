import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
import styles from './ProductsScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Product} from "../../models/Product/Product";
import * as productActions from '../../store/actions/products.actions'
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import Button from "../../components/basicComponents/Button/Button";
import Text from "../../components/basicComponents/Text/Text";
import {Ionicons} from "@expo/vector-icons";
import colours from "../../constants/colours";
import {fetchProducts} from "../../store/actions/products.actions";
import {Simulate} from "react-dom/test-utils";

type Props = StackScreenProps<ProductsStackNavigation, 'Products'>;

const ProductsScreen = ({route, navigation}: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const products = useSelector((state: RootState) => state.products.userProducts)
    const error = useSelector((state: RootState) => state.products.error);
    const dispatch = useDispatch()


    const loadProducts = useCallback(async () => {
        setIsLoading(true)
        await dispatch(fetchProducts.request)
        setIsLoading(false)
    }, [dispatch])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', loadProducts)
        return unsubscribe;
    }, [loadProducts])

    useEffect(() => {
        loadProducts()
    }, [dispatch, loadProducts])

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
                <Text style={{color: colours.text.muted}}>You have created no products</Text>
            </View>
        )
    }


    const renderProductItems = ({item}: { item: Product }) => {
        const onSelect = () => navigation.navigate('ProductDetails', {productId: item.id})
        const onEdit = () => navigation.navigate('EditProduct', {productId: item.id})
        const onDelete = () => dispatch(productActions.deleteProduct.request(item.id))

        const deleteHandler = () => Alert.alert(
            'Are you sure?',
            'This action cannot be undone. Do you still want to delete this product?',
            [
                {text: 'Cancel', style: 'default'},
                {text: 'Delete product', style: 'destructive', onPress: onDelete}
            ]
        )

        return <ProductListItem product={item} onSelect={onSelect}>
            <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                    onPress={onEdit}>
                <Ionicons name={"create-outline"} size={16} color={colours.brightAccent}/>{'  '}
                Edit product
            </Button>
            <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                    onPress={deleteHandler}>
                <Ionicons name={"trash-outline"} size={16} color={colours.brightAccent}/>{'  '}
                Delete product
            </Button>
        </ProductListItem>
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.flatlist} data={products} renderItem={renderProductItems}
                      keyExtractor={item => item.id}/>
        </View>
    )
}


export default ProductsScreen;
