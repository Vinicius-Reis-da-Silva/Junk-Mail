import { StyleSheet } from "react-native";

import { fonts, colors } from "../../styles";  

const styles = StyleSheet.create({

    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    vertical: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    outlineCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: colors.black,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.black
    },

    textLabel: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        color: colors.black,
        marginLeft: 8
    }
});

export default styles;