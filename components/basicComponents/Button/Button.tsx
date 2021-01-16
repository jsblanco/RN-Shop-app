import React from "react";
import {
    Dimensions, Platform,
    StyleSheet,
    Text,
    TextStyle, TouchableNativeFeedback,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import colours from '../../../constants/colours';

const Button = (props: { onPress: (...args: any[] ) => any | void, buttonStyle?: ViewStyle, textStyle?: TextStyle, children: React.ReactNode }) => {


    let ButtonType: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonType = TouchableNativeFeedback;
    }

    return (
        <ButtonType activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.view, ...props.buttonStyle}}>
                <Text style={{...styles.text, ...props.textStyle}}>
                    {props.children}
                </Text>
            </View>
        </ButtonType>
    )

}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colours.brightAccent,
        paddingVertical: Dimensions.get('window').height > 600 ? 10 : 7,
        paddingHorizontal: 15,
        borderWidth: 0,
        borderRadius: 10,
        margin: 2,

    },
    text: {
        color: 'white',
        paddingBottom: 0,
        fontFamily: 'openSans',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Button;
