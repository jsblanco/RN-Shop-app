import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import OrdersScreen from "../../screens/OrdersScreen/OrdersScreen";
import styles from './stack.styles'
import OrderDetailsScreen from "../../screens/OrderDetailsScreen/OrderDetailsScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen/ProductDetailsScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const Stack = createStackNavigator();

export function OrdersStackNavigation() {

    const navigation = useNavigation()
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            // @ts-ignore
            screenOptions={{
                ...styles
            }}
        >
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    headerTitle: 'Your orders',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={'Menu'} iconName={'ios-menu'}
                                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}/>
                        </HeaderButtons>
                    )
                }}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetailsScreen}
                options={{
                    headerTitle: 'Order Details'
                }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerTitle: 'Product details'
                }}
            />
        </Stack.Navigator>
    )

}
