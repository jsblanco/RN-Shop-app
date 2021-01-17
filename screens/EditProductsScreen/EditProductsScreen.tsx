import React from 'react';
import {Platform, View} from 'react-native';
import styles from './EditProductsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";

type Props = StackScreenProps<ProductsStackNavigation, 'EditProduct'>;


const EditProductsScreen = ({route: {params: {productId}}, navigation}: Props) => {

    const product = useSelector((state: RootState) => state.products.userProducts.find(product => product.id === productId))
    if (!product) return <Text> There is no such product</Text>


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add'} iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                          onPress={navigation.popToTop}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.screen}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
        </View>
    )
}


export default EditProductsScreen;
