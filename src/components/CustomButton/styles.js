import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderWidth: 1
    },
    
    text: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontWeight: 'bold',
        color: colors.white,
    },

    'button-big': {
        width: 220,
        height: 35,
    },

    'button-medium': {
        width: 200,
        height: 40,
    },

    'button-small': {
        width: 150,
        height: 40,
    }
});

export default styles;