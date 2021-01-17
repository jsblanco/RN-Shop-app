import {StyleSheet} from "react-native";
import colours from "../../constants/colours";

export default StyleSheet.create({
    screen: {
        flex: 1,
        // height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    container: {
      flex: 1,
      width: '100%',
    },
    imageRow: {
        height: 120,
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    dataRow: {
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'openSansBold',
        fontSize: 18
    },
    actionRow: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    total: {
        fontSize: 18,
        fontFamily: 'openSansBold'
    },
    button: {
        padding: 0,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 12,
        color: colours.brightAccent
    }
})
