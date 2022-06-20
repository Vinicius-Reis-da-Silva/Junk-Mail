import { StyleSheet } from "react-native";

import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    containerForm: {
        paddingHorizontal: 20,
    },

    title: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 22,
    },

    containerButtonCadastrar: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderWidth: 0.5,
        marginHorizontal: 75,
        marginVertical: 22,
    },

    textButtonCadastrar: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontWeight: 'bold',
        color: colors.white,
    }
});

export default styles;