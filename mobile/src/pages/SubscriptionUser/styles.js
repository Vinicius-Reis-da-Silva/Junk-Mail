import { StyleSheet } from "react-native";

import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    description: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 40,
        marginHorizontal: 10,
        marginVertical: 40,
        backgroundColor: colors.lightPrimary,
        borderWidth: 0.5,
        borderRadius: 10
    },

    buttonClose: {
        alignSelf: 'flex-end',
        marginBottom: -10,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imageHeader: {
        width: 96,
        height: 96,
        resizeMode: "stretch",
    },

    textHeader: {
        fontFamily: fonts.family,
        fontSize: fonts.big,
        fontWeight: "bold",
        color: colors.black,
        textAlign: "center",
    },

    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        margin: 10,
        minWidth: "80%",
    },

    imageItem: {
        width: 45,
        height: 45,
        resizeMode: "stretch",
    },

    textItem: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        color: colors.black,
        textAlign: "center",
        textAlignVertical: "center",
    },

    announcement: {
        fontFamily: fonts.family,
        fontSize: fonts.bigger,
        fontWeight: "bold",
        color: colors.black,
        textAlign: "center",
    },
});

export default styles;