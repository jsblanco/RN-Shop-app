import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import styles from "./stack.styles";
import OrderDetailsScreen from "../../screens/OrderDetailsScreen/OrderDetailsScreen";
import ShoppingCartScreen from "../../screens/ShoppingCartScreen/ShoppingCartScreen";
import CatalogueScreen from "../../screens/CatalogueScreen/CatalogueScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions, useNavigation} from "@react-navigation/native";


const Stack = createStackNavigator();
export function ShoppingStackNavigation() {

    const navigation = useNavigation()
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
                options={{
                    headerTitle: 'All Products',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Menu'} iconName={'ios-menu'}
                                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}/>
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Shopping cart'} iconName={'cart-outline'}
                                  onPress={() => navigation.navigate('ShoppingCart')}/>
                        </HeaderButtons>
                    )
                }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerTitle: 'Product Details',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Shopping cart'} iconName={'cart-outline'}
                                  onPress={() => navigation.navigate('ShoppingCart')}/>
                        </HeaderButtons>
                    )
                }}
            />
            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCartScreen}
                options={{
                    headerTitle: 'Shopping cart'
                }}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetailsScreen}
                options={{
                    headerTitle: 'Order completed!'
                }}
            />
        </Stack.Navigator>
    )

}
