import React from 'react';
import {Platform} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import ProductsScreen from "../../screens/ProductsScreen/ProductsScreen";
import EditProductsScreen from "../../screens/EditProductsScreen/EditProductsScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import styles from "./stack.styles";

const Stack = createStackNavigator();
export function ProductsStackNavigation() {

    const navigation = useNavigation()

    return (
        <Stack.Navigator
            initialRouteName="Products"
            // @ts-ignore
            screenOptions={{
                ...styles
            }}
        >
            <Stack.Screen
                name="My Products"
                component={ProductsScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Menu'} iconName={'ios-menu'}
                                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}/>
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Create'} iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create' }
                                  onPress={() => console.log('Create product')}/>
                        </HeaderButtons>
                    ),
                }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
            />
            <Stack.Screen
                name="EditProduct"
                component={EditProductsScreen}
                options={{}}
            />
            <Stack.Screen
                name="AddProduct"
                component={EditProductsScreen}
                options={{}}
            />
        </Stack.Navigator>
    )

}
