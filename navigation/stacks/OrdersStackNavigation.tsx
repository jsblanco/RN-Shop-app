import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import OrdersScreen from "../../screens/OrdersScreen/OrdersScreen";
import styles from './stack.styles'
import colours from "../../constants/colours";
import OrderDetailsScreen from "../../screens/OrderDetailsScreen/OrderDetailsScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";

const Stack = createStackNavigator();
export function OrdersStackNavigation() {


    return (
        <Stack.Navigator
            initialRouteName="Orders"
            // @ts-ignore
            screenOptions={{
                ...styles
            }}
        >
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{}}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetailsScreen}
                options={{}}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{}}
            />
        </Stack.Navigator>
    )

}
