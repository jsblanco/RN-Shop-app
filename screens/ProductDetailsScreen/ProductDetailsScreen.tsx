import React from 'react';
import {View} from 'react-native';
import styles from './ProductDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
type Props = StackScreenProps<ProductsStackNavigation, 'ProductDetails'>;


const ProductDetailsScreen = ({route, navigation}: Props) => {


    return (
        <View style={styles.screen}>
            <Text>ProductDetailsScreen works!</Text>
        </View>
    )
}


export default ProductDetailsScreen;
