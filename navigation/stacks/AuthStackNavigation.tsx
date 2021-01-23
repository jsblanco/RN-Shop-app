import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import styles from './stack.styles'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import AuthScreen from "../../screens/AuthScreen/AuthScreen";
import StartUpScreen from "../../screens/StartUpScreen/StartUpScreen";

const Stack = createStackNavigator();

export function AuthStackNavigation() {

    const navigation = useNavigation()
    return (
        <Stack.Navigator
            initialRouteName="Startup"
            // @ts-ignore
            screenOptions={{
                ...styles
            }}
        >
            <Stack.Screen
                name="StartUp"
                component={StartUpScreen}
                />
            <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                    headerTitle: "Welcome to Jorge's Shop App",
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Menu'} iconName={'ios-menu'}
                                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}/>
                        </HeaderButtons>
                    )
                }}
            />

        </Stack.Navigator>
    )

}
