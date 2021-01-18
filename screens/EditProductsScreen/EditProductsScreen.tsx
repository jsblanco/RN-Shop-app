import React, {useCallback, useState} from 'react';
import {Platform, ScrollView, TextInput, View} from 'react-native';
import styles from './EditProductsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import Button from "../../components/basicComponents/Button/Button";
import * as productActions from '../../store/actions/products.actions';

type Props = StackScreenProps<ProductsStackNavigation, 'EditProduct'>;


const EditProductsScreen = ({route: {params: {productId}}, navigation}: Props) => {

    const editingProduct = useSelector((state: RootState) => state.products.userProducts.find(product => product.id === productId))

    const [title, setTitle] = useState(!!editingProduct ? editingProduct.title : '')
    const [price, setPrice] = useState(!!editingProduct ? '' + editingProduct.price : '')
    const [imageUrl, setImageUrl] = useState(!!editingProduct ? editingProduct.imageUrl : '')
    const [description, setDescription] = useState(!!editingProduct ? editingProduct.description : '')
    const dispatch = useDispatch();

    const saveChanges = useCallback(() => {
        !!editingProduct
            ? dispatch(productActions.updateProduct(editingProduct.id, title, description, imageUrl))
            : dispatch(productActions.createProduct(title, description, price, imageUrl));
        navigation.navigate('Products')
    }, [dispatch, editingProduct, price, title, description, imageUrl])

    const priceInputHandler = useCallback((inputValue: string) => {
        setPrice(inputValue.replace(/[^0-9]/g, ''))
    }, [])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!editingProduct ? 'Editing ' + editingProduct.title : 'New product',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add'} iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                          onPress={() => navigation.push('EditProduct', {})}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Product name:</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>
                {!editingProduct && <View style={styles.formControl}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        keyboardType="number-pad"
                        onChangeText={priceInputHandler}
                    />
                </View>}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Product image:</Text>
                    <TextInput
                        style={styles.input}
                        value={imageUrl}
                        onChangeText={setImageUrl}
                    />
                </View>
                <View style={styles.actionRow}>
                    <Button onPress={saveChanges}>{!!editingProduct ? 'Update product' : 'Create product'}</Button>
                </View>
            </View>
        </ScrollView>
    )
}


export default EditProductsScreen;
