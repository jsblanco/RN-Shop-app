import {StyleSheet} from "react-native";
import colours from "../../constants/colours";

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
    bold: {
        fontFamily: 'openSansBold',
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
    actionsRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: "space-between",
    },
    totalAmount: {
        fontSize: 16,
        paddingHorizontal: 20,
        // paddingVertical: 15,
        marginBottom: 7
    },
    button: {
        marginBottom: 4,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },
    buttonText: {
        color: colours.brightAccent
    },
})
