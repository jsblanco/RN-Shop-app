import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {OrdersStackNavigation} from "./stacks/OrdersStackNavigation";
import {ShoppingStackNavigation} from "./stacks/ShoppingStackNavigation";
import {ProductsStackNavigation} from "./stacks/ProductsStackNavigation";
import {NavigationContainer} from '@react-navigation/native';
import colours from "../constants/colours";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {fetchProducts} from "../store/actions/products.actions";

const Drawer = createDrawerNavigator();

export function RootDrawerNavigation() {

    const dispatch = useDispatch()
    const productList = useSelector((state: RootState) => state.products.availableProducts);
    if (productList.length === 0) dispatch(fetchProducts.request)

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
        </NavigationContainer>
    )

}
