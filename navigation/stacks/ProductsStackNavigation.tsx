import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ProductsScreen from "../../screens/ProductsScreen/ProductsScreen";
import colours from "../../constants/colours";
import styles from "./stack.styles";

const Stack = createStackNavigator();
export function ProductsStackNavigation() {


    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: colours.primary,
                ...styles
            }}
        >
            <Stack.Screen
                name="Home"
                component={ProductsScreen}
                options={{}}
            />
            {/*<Stack.Screen*/}
            {/*    name="Orders"*/}
            {/*    component={}*/}
            {/*    options={}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name="Products"*/}
            {/*    component={}*/}
            {/*    options={}*/}
            {/*/>*/}
        </Stack.Navigator>
    )

}
