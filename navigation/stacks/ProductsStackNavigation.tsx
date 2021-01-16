import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ProductsScreen from "../../screens/ProductsScreen/ProductsScreen";
import colours from "../../constants/colours";
import styles from "./stack.styles";
import EditProductsScreen from "../../screens/EditProductsScreen/EditProductsScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";

const Stack = createStackNavigator();
export function ProductsStackNavigation() {


    return (
        <Stack.Navigator
            initialRouteName="Home"
            // @ts-ignore
            screenOptions={{
                ...styles
            }}
        >
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={{}}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{}}
            />
            <Stack.Screen
                name="EditProduct"
                component={EditProductsScreen}
                options={{}}
            />
        </Stack.Navigator>
    )

}
