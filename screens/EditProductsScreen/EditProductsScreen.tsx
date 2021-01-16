import React from 'react';
import {View} from 'react-native';
import styles from './EditProductsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
type Props = StackScreenProps<ProductsStackNavigation, 'EditProduct'>;


const EditProductsScreen = ({route, navigation}: Props) => {

    return (
        <View style={styles.screen}>
            <Text>EditProductsScreen works!</Text>
        </View>
    )
}


export default EditProductsScreen;
