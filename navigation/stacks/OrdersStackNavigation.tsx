import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import OrdersScreen from "../../screens/OrdersScreen/OrdersScreen";
import styles from './stack.styles'
import colours from "../../constants/colours";

const Stack = createStackNavigator();
export function OrdersStackNavigation() {


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
                component={OrdersScreen}
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
