import {StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    flatList: {
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'openSansBold',
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 30,
        fontSize: 24,
    },
    header: {
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
})
