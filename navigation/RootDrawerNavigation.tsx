import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {OrdersStackNavigation} from "./stacks/OrdersStackNavigation";
import {ShoppingStackNavigation} from "./stacks/ShoppingStackNavigation";
import {ProductsStackNavigation} from "./stacks/ProductsStackNavigation";

const Drawer = createDrawerNavigator();
export function RootDrawerNavigation() {


    return (
    <Drawer.Navigator
        initialRouteName="Shopping"
    >
        <Drawer.Screen
            name="Shopping"
            component={ShoppingStackNavigation}
            options={{}}
        />
        <Drawer.Screen
            name="Orders"
            component={OrdersStackNavigation}
            options={{}}
        />
        <Drawer.Screen
            name="Products"
            component={ProductsStackNavigation}
            options={{}}
        />
    </Drawer.Navigator>
        )

}
