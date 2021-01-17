import {StyleSheet} from "react-native";
import colours from "../../constants/colours";

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 15,
        height: 300,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,

        elevation: 5,
    },
    cardStyle: {
    },
    imageContainer: {
        height: '65%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        borderRadius: 5,
    },
    titleContainer: {
        height: '20%',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        textAlign: "center",
        fontFamily: 'openSansBold',
        fontSize: 16,
    },
    price: {
        textAlign: "center",
        fontSize: 12,
    },
    actionsBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
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
