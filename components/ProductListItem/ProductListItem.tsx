import React from 'react';
import {Image, Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {Product} from "../../models/Product/Product";
import styles from './ProductListItem.styles';
import Text from "../../components/basicComponents/Text/Text";
import Card from "../basicComponents/Card/Card";


const ProductListItem = ({product, onSelect, children}: { product: Product, onSelect: () => void, children?: React.ReactChild | React.ReactChild[] }) => {

    let CustomButton: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) CustomButton = TouchableNativeFeedback;


    return (
        <Card style={styles.screen}>
            <CustomButton onPress={onSelect} useForeground={true}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: product.imageUrl}} style={styles.image}/>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                        <Text style={styles.price}>{product.price.toFixed(2)} €</Text>
                    </View>
                    <View style={styles.actionsBar}>
                        {children}
                    </View>
                </View>
            </CustomButton>
        </Card>
    )
}

export default ProductListItem;
