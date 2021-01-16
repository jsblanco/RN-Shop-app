import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {OrdersStackNavigation} from "./stacks/OrdersStackNavigation";
import {ShoppingStackNavigation} from "./stacks/ShoppingStackNavigation";
import {ProductsStackNavigation} from "./stacks/ProductsStackNavigation";
import {NavigationContainer} from '@react-navigation/native';
import colours from "../constants/colours";

const Drawer = createDrawerNavigator();

export function RootDrawerNavigation() {


    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Shopping"
                drawerContentOptions={{
                    activeTintColor: colours.brightAccent,
                    itemStyle: {
                        width: '100%',
                    }
                }}
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
        </NavigationContainer>
    )

}
