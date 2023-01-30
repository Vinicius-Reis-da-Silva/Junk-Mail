import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderWidth: 0.5
    },
    
    text: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontWeight: 'bold',
        color: colors.white,
    },

    'button-bigPrimary': {
        width: 210,
        height: 35,
        backgroundColor: colors.primary
    },

    'button-mediumPrimary': {
        width: 200,
        height: 40,
        backgroundColor: colors.primary,
    },

    'button-mediumSecondary': {
        width: 200,
        height: 40,
        backgroundColor: colors.darkSecondary,
    },

    'button-mediumTertiary': {
        width: 200,
        height: 40,
        backgroundColor: colors.secondary,
    },

    'button-smallPrimary': {
        width: 150,
        height: 40,
        backgroundColor: colors.primary,
    },

    'button-smallSecondary': {
        width: 150,
        height: 40,
        backgroundColor: colors.darkSecondary,
    },

    'button-smallTertiary': {
        width: 150,
        height: 40,
        backgroundColor: colors.red,
    }
});

export default styles;