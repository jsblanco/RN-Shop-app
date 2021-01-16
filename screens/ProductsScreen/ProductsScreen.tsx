import React from 'react';
import {View} from 'react-native';
import styles from './ProductsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {DrawerActions} from "@react-navigation/native";
import {StackScreenProps} from "@react-navigation/stack";

type Props = StackScreenProps<ProductsStackNavigation, 'Home'>;


const ProductsScreen = ({route, navigation}: Props) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Menu'}
                        iconName={'ios-menu'}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                    />
                </HeaderButtons>
            )
        });
    }, [navigation]);

    return (
        <View style={styles.screen}>
            <Text>ProductsScreen works!</Text>
        </View>
    )
}


export default ProductsScreen;
