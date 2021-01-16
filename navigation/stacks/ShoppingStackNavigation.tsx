import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator();
export function ShoppingStackNavigation() {


    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
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
