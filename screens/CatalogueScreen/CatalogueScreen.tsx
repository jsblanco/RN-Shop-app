import React from 'react';
import {FlatList, View} from 'react-native';
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

type Props = StackScreenProps<ShoppingStackNavigation, 'Catalogue'>;

const CatalogueScreen = ({route, navigation}: Props) => {

    const products = useSelector((state: RootState) => state.products.availableProducts);
    const dispatch = useDispatch();

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
