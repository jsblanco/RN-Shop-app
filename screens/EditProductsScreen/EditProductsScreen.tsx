import React, {useCallback, useState, useReducer} from 'react';
import {Alert, Platform, ScrollView, TextInput, View} from 'react-native';
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
type reducerStateType = {
    inputValues: {
        title: string,
        description: string,
        imageUrl: string,
        price: string,
    },
    inputValidities: {
        title: boolean,
        description: boolean,
        imageUrl: boolean,
        price: boolean,
    },
    formIsValid: boolean
}

const FORM_UPDATE = 'FORM_UPDATE';
const formReducer = (state: reducerStateType, action: any) => {
    if (action.type === FORM_UPDATE) {

    }
    return {...state}
}


const EditProductsScreen = ({route: {params: {productId}}, navigation}: Props) => {

    const editedProduct = useSelector((state: RootState) => state.products.userProducts.find(product => product.id === productId))
    const dispatch = useDispatch();


    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            title: editedProduct ? editedProduct.title : '',
            description: editedProduct ? editedProduct.description : '',
            imageUrl: editedProduct ? editedProduct.imageUrl : '',
            price: '',
        },
        inputValidities: {
            title: !!editedProduct,
            description: !!editedProduct,
            imageUrl: !!editedProduct,
            price: !!editedProduct,
        },
        formIsValid: false
    })

    /*
    const [title, setTitle] = useState(!!editedProduct ? editedProduct.title : '')
    const [price, setPrice] = useState(!!editedProduct ? '' + editedProduct.price : '')
    const [imageUrl, setImageUrl] = useState(!!editedProduct ? editedProduct.imageUrl : '')
    const [description, setDescription] = useState(!!editedProduct ? editedProduct.description : '')
    const [titleIsValid, setTitleIsValid] = useState(!!editedProduct && !!editedProduct.title.trim())
    const [descriptionIsValid, setDescriptionIsValid] = useState(!!editedProduct && !!editedProduct.description.trim())
    const [attemptedToSubmit, setAttemptedToSubmit]= useState(false)
    */

    const saveChanges = useCallback(() => {
        /*
        if (!titleIsValid || !descriptionIsValid) {
            setAttemptedToSubmit(true);
            Alert.alert('Missing inputs', 'Please input all product data, then press Submit', [{text: 'Ok'}])
            return
        }
         */

        const {title, description, price, imageUrl} = formState.inputValues;
        !!editedProduct
            ? dispatch(productActions.updateProduct(editedProduct.id, title, description, imageUrl))
            : dispatch(productActions.createProduct(title, description, price, imageUrl));
        navigation.navigate('Products')
    }, [dispatch, editedProduct, formState, /* titleIsValid, descriptionIsValid */])

    /*
    const stringInputHandler = (input: string, validatorSetter: (e: boolean) => void, setter: (e: string) => void) => {
        if (input.trim().length === 0) return validatorSetter(false)
        validatorSetter(true);
        setter(input);
    }

    const priceInputHandler = useCallback((inputValue: string) => {
        setPrice(inputValue.replace(/[^0-9]/g, ''))
    }, [])
    */

    const stringInputHandler = (key: 'title' | 'description' | 'imageUrl' | 'price', value: string) => {
        let isValid = false;
        if (value.trim().length === 0) {
            isValid = true;
        }
        formDispatch({
            type: FORM_UPDATE,
            value: value,
            isValid,
            input: 'title'

        })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!editedProduct ? 'Editing ' + editedProduct.title : 'New product',
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
                        onChangeText={stringInputHandler.bind(this, 'title')}
                        keyboardType={"default"}
                        autoCapitalize={"sentences"}
                        autoCorrect
                    />
                </View>
                {/*{(attemptedToSubmit && !titleIsValid) && <Text style={{color: 'tomato'}}>Please input a valid title</Text>}*/}

                <View style={styles.formControl}>
                    <Text style={styles.label}>Description:</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={stringInputHandler.bind(this, 'description')}
                        multiline
                    />

                    {/*{(attemptedToSubmit && !descriptionIsValid) && <Text style={{color: 'tomato'}}>Please input a valid description</Text>}*/}
                </View>
                {!editedProduct && <View style={styles.formControl}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        keyboardType={"decimal-pad"}
                        onChangeText={stringInputHandler.bind(this, 'price')}
                    />
                </View>}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Product image:</Text>
                    <TextInput
                        style={styles.input}
                        value={imageUrl}
                        onChangeText={stringInputHandler.bind(this, 'imageUrl')}
                    />
                </View>
                <View style={styles.actionRow}>
                    <Button onPress={saveChanges}>{!!editedProduct ? 'Update product' : 'Create product'}</Button>
                </View>
            </View>
        </ScrollView>
    )
}


export default EditProductsScreen;
