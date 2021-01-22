import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {OrdersStackNavigation} from "./stacks/OrdersStackNavigation";
import {ShoppingStackNavigation} from "./stacks/ShoppingStackNavigation";
import {ProductsStackNavigation} from "./stacks/ProductsStackNavigation";
import {NavigationContainer} from '@react-navigation/native';
import colours from "../constants/colours";
import {Ionicons} from "@expo/vector-icons";
import {AuthStackNavigation} from "./stacks/AuthStackNavigation";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const Drawer = createDrawerNavigator();

export function RootDrawerNavigation() {
    const isLoggedIn = useSelector((state: RootState)=>state.auth.isLoggedIn);
    return (
        <NavigationContainer>
            {isLoggedIn ? (
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
                        options={{
                            drawerLabel: "Shopping",
                            drawerIcon: ({color, size}) => (
                                <Ionicons name="cart-outline" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Orders"
                        component={OrdersStackNavigation}
                        options={{
                            drawerLabel: "Your orders",
                            drawerIcon: ({color, size}) => (
                                <Ionicons name="receipt-outline" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Products"
                        component={ProductsStackNavigation}
                        options={{
                            drawerLabel: "Your products",
                            drawerIcon: ({color, size}) => (
                                <Ionicons name="pricetags-outline" color={color} size={size}/>
                            ),
                        }}
                    />
                </Drawer.Navigator>
            ) : (
                <Drawer.Navigator
                    initialRouteName="Login"
                    drawerContentOptions={{
                        activeTintColor: colours.brightAccent,
                        itemStyle: {
                            width: '100%',
                        }
                    }}
                >
                    <Drawer.Screen
                        name="Login"
                        component={AuthStackNavigation}
                        options={{
                            drawerLabel: "Login",
                            drawerIcon: ({color, size}) => (
                                <Ionicons name="cart-outline" color={color} size={size}/>
                            ),
                        }}
                    />
                </Drawer.Navigator>

            )}
        </NavigationContainer>
    )

}
