import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import styles from './AuthScreen.styles';
import Button from "../../components/basicComponents/Button/Button";
import FormControl from "../../components/FormControl/FormControl";
import Card from "../../components/basicComponents/Card/Card";
import {LinearGradient} from "expo-linear-gradient";
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import * as authActions from '../../store/actions/auth.actions'
import {RootState} from "../../store/store";

type Props = StackScreenProps<AuthStackNavigation, 'Auth'>;
type ReducerStateType = {
    inputValues: {
        email: string,
        password: string,
    },
    inputValidities: {
        email: boolean,
        password: boolean,
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


const AuthScreen = ({route, navigation}: Props) => {
    const isLoggedIn = useSelector((state:RootState)=> state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {email: '', password: '',},
        inputValidities: {email: false, password: false,},
        formIsValid: false
    })
    const inputHandler = useCallback((key: string, value: string, isValid: boolean) => {
        formDispatch({type: FORM_UPDATE, value: value, isValid: isValid, input: key})
    }, [formDispatch])



    const authHandler = () => {
        if (formState.formIsValid) {
            let action;
            isSigningUp
                ? action = authActions.signup.request(formState.inputValues.email, formState.inputValues.password)
                : action =authActions.login.request(formState.inputValues.email, formState.inputValues.password)
            dispatch(action)
        }
    }


    return (
        // <KeyboardAvoidingView style={styles.screen} behavior={"padding"} keyboardVerticalOffset={0}>
        <LinearGradient style={styles.gradient} colors={['#ddd', '#666']}>
            <Card style={styles.card}>
                <ScrollView>
                    <FormControl
                        inputName={'email'}
                        label={'User email'}
                        value={formState.inputValues.email}
                        isValid={formState.inputValidities.email}
                        inputHandler={inputHandler}
                        keyboardType={"email-address"}
                        autoCapitalize={'none'}
                        required
                        email
                    />
                    <FormControl
                        label={'Password'}
                        inputName={'password'}
                        value={formState.inputValues.password}
                        isValid={formState.inputValidities.password}
                        inputHandler={inputHandler}
                        autoCapitalize={'none'}
                        minLength={6}
                        secureTextEntry
                        required
                    />
                    <View style={styles.actionRow}>
                        <Button onPress={authHandler}>{isSigningUp
                            ? 'Sign up'
                            : 'Log in'}</Button>
                        <Button
                            onPress={() => setIsSigningUp(isSigningUp => !isSigningUp)}
                            buttonStyle={styles.secondaryButtonView}
                            textStyle={styles.secondaryButtonText}
                        >{isSigningUp
                            ? 'Already have an account?'
                            : 'Don\'t have an account?'}</Button>
                    </View>
                </ScrollView>
            </Card>
        </LinearGradient>
        // </KeyboardAvoidingView>
    )
}

export default AuthScreen;
