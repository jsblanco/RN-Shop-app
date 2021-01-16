import React from 'react';
import {Image, View} from 'react-native';
import styles from './ProductListItem.styles';
import Text from "../../components/basicComponents/Text/Text";
import {Product} from "../../models/Product";
import Button from "../basicComponents/Button/Button";
import Card from "../basicComponents/Card/Card";

const ProductListItem = ({product}: { product: Product }) => {

    return (
        <Card style={styles.screen}>
            <View style={styles.cardStyle}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: product.imageUrl}} style={styles.image}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.price}>{product.price.toFixed(2)} €</Text>
                </View>
                <View style={styles.actionsBar}>
                    <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                            onPress={() => console.log('Left button')}>View details</Button>
                    <Button buttonStyle={styles.button} textStyle={styles.buttonText}
                            onPress={() => console.log('Right button')}>Add to cart</Button>
                </View>
            </View>
        </Card>
    )
}

export default ProductListItem;
