import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import styles from "./stack.styles";
import OrderDetailsScreen from "../../screens/OrderDetailsScreen/OrderDetailsScreen";
import ShoppingCartScreen from "../../screens/ShoppingCartScreen/ShoppingCartScreen";
import CatalogueScreen from "../../screens/CatalogueScreen/CatalogueScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
import {Ionicons} from "@expo/vector-icons";
import Button from "../../components/basicComponents/Button/Button";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions} from "@react-navigation/native";

const Stack = createStackNavigator();
export function ShoppingStackNavigation() {

    return (
        <Stack.Navigator
            initialRouteName="Catalogue"
            // @ts-ignore
            screenOptions={{
                ...styles
            }}
        >
            <Stack.Screen
                name="Catalogue"
                component={CatalogueScreen}
                options={{}}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{}}
            />
            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCartScreen}
                options={{}}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetailsScreen}
                options={{}}
            />
        </Stack.Navigator>
    )

}
