import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ShoppingScreen from "../../screens/ShoppingScreen/ShoppingScreen";
import colours from "../../constants/colours";
import styles from "./stack.styles";

const Stack = createStackNavigator();
export function ShoppingStackNavigation() {


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
                component={ShoppingScreen}
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
