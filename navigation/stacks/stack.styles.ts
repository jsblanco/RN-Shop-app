import {StyleSheet} from "react-native";
import colours from "../../constants/colours";


const styles = StyleSheet.create({
    headerStyle: {
        elevation: 10,
    },
    headerTitleStyle: {
        color: colours.primary,
        fontWeight: '900',
        fontFamily: 'openSansBold',
    },
    headerBackTitleStyle: {
        fontFamily: 'openSans'
    }
})

export default styles;
