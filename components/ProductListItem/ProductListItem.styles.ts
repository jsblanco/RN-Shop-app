import {StyleSheet} from "react-native";

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
    imageContainer: {
        height: '65%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
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
    }
})
