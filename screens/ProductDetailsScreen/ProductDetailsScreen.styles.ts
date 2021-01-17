import {StyleSheet} from "react-native";
import colours from "../../constants/colours";

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'openSansBold',
        fontSize: 22,
    },
    price: {
        color: colours.text.muted,
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        paddingBottom: 50
    }
})
