import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './CatalogueScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import {DrawerActions} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Product} from "../../models/Product";

type Props = StackScreenProps<ShoppingStackNavigation, 'Catalogue'>;

const CatalogueScreen = ({route, navigation}: Props) => {

    const products = useSelector((state: RootState) => state.products.availableProducts);
    const renderProductList = ({item}: { item: Product }) => {
        // @ts-ignore
        return (
            <ProductListItem
                product={item}
                onClickDetails={() => navigation.navigate('ProductDetails', {productId: item.id})}
            />
        )
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Menu'} iconName={'ios-menu'}
                          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}/>
                </HeaderButtons>
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add to cart'} iconName={'cart-outline'}
                          onPress={() => navigation.navigate('ShoppingCart')}/>
                </HeaderButtons>
            )
        })
        ;
    }, [navigation]);

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
