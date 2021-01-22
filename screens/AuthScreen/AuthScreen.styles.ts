import {StyleSheet} from "react-native";
import colours from "../../constants/colours";

export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginTop: -50,
        width: '80%',
        padding: 20,
        maxWidth: 400,
        maxHeight: 400,
    },
    actionRow: {
      marginTop: 20,
    },
    secondaryButtonView: {
      backgroundColor: 'transparent',
    },
    secondaryButtonText: {
        color: colours.brightAccent
    },
})
