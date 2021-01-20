import React, {useCallback, useState, useReducer} from 'react';
import {Alert, Platform, ScrollView, View} from 'react-native';
import styles from './EditProductsScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import Button from "../../components/basicComponents/Button/Button";
import * as productActions from '../../store/actions/products.actions';
import FormControl from "../../components/FormControl/FormControl";

type Props = StackScreenProps<ProductsStackNavigation, 'EditProduct'>;
type ReducerStateType = {
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
type ActionsType = {
    type: string,
    value: string,
    isValid: boolean,
    input: string,
}

const FORM_UPDATE = 'FORM_UPDATE';
const formReducer = (state: ReducerStateType, a: ActionsType) => {
    let updatedValues, updatedValidities;
    let updatedFormIsValid = true;
    if (a.type === FORM_UPDATE) {
        updatedValues = {
            ...state.inputValues,
            [a.input]: a.value,
        }
        updatedValidities = {
            ...state.inputValidities,
            [a.input]: a.isValid,
        }
        for (let key in updatedValidities) {
            // @ts-ignore
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            ...state,
            inputValues: updatedValues,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid
        };
    }
    return {...state}
}


const EditProductsScreen = ({route: {params: {productId}}, navigation}: Props) => {

    const editedProduct = useSelector((state: RootState) => state.products.userProducts.find(product => product.id === productId))
    const [formTouched, setFormTouched] = useState(false)
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

    const saveChanges = useCallback(() => {
        if (!formTouched) setFormTouched(true)
        if (!formState.formIsValid) {
            Alert.alert('Missing inputs', 'Please input all product data, then press Submit', [{text: 'Ok'}])
            return
        }
        const {title, description, price, imageUrl} = formState.inputValues;
        !!editedProduct
            ? dispatch(productActions.updateProduct(editedProduct.id, title, description, imageUrl))
            : dispatch(productActions.createProduct(title, description, price, imageUrl));
        navigation.navigate('Products')
    }, [dispatch, editedProduct, formState])

    const stringInputHandler = useCallback((key: string, value: string, isValid: boolean) => {
        formDispatch({
            type: FORM_UPDATE,
            value: value,
            isValid: isValid,
            input: key
        })
    }, [formDispatch])


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
                <FormControl
                    keyName={'title'}
                    label={'product name'}
                    formTouched={formTouched}
                    value={formState.inputValues.title}
                    isValid={formState.inputValidities.title}
                    inputHandler={stringInputHandler}
                    required={true}
                />
                <FormControl
                    keyName={'description'}
                    formTouched={formTouched}
                    label={'product description'}
                    value={formState.inputValues.description}
                    isValid={formState.inputValidities.description}
                    inputHandler={stringInputHandler}
                    multiline={true}
                    required={true}
                />
                <FormControl
                    keyName={'imageUrl'}
                    label={'image URL'}
                    formTouched={formTouched}
                    value={formState.inputValues.imageUrl}
                    isValid={formState.inputValidities.imageUrl}
                    inputHandler={stringInputHandler}
                    required={true}
                />
                {!editedProduct &&
                <FormControl
                    label={'Price'}
                    keyName={'price'}
                    value={formState.inputValues.price}
                    isValid={formState.inputValidities.price}
                    formTouched={formTouched}
                    inputHandler={stringInputHandler}
                    keyboardType={"decimal-pad"}
                    required={true}
                />}
                <View style={styles.actionRow}>
                    <Button onPress={saveChanges}>{!!editedProduct ? 'Update product' : 'Create product'}</Button>
                </View>
            </View>
        </ScrollView>
    )
}


export default EditProductsScreen;
