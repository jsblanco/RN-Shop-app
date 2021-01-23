import React, {useEffect} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ActivityIndicator, View} from 'react-native';
import colours from "../../constants/colours";
import styles from './StartUpScreen.styles';
import {StackScreenProps} from "@react-navigation/stack";
import {useDispatch} from "react-redux";
import {authenticate} from "../../store/actions/auth.actions";

type Props = StackScreenProps<AuthStackNavigation, 'StartUp'>;

const StartUpScreen = ({route, navigation}: Props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const isUserLoggedIn = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) return navigation.navigate('Auth');
            const {token, userId, expirationDate} = JSON.parse(userData + '');
            if (new Date(expirationDate) <= new Date()
                || !token
                || !userId) return navigation.navigate('Auth');
            dispatch(authenticate(token, userId))
        }
        isUserLoggedIn()
    }, [dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size={'large'} color={colours.brightAccent}/>
        </View>
    )
}

export default StartUpScreen;
