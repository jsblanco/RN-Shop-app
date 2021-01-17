import {StyleSheet} from "react-native";
import colours from "../../constants/colours";

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatlist: {
        width: '100%'
    },
    button: {
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 12,
        color: colours.brightAccent
    }
})
