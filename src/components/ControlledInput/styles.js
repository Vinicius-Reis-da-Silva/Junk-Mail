import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.grey,
        width: '100%',
        height: 40,

        borderRadius: 10,
        borderColor: '#717171',
        borderWidth: 1,

        paddingHorizontal: 10,
        marginVertical: 10
    },

    input: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
    },

    errorContainer: {
        borderWidth: 4,
        borderColor: colors.red,
    },

    messageErro: {
        color: colors.red,
        alignSelf: 'stretch',
        fontFamily: fonts.family,
        fontSize: fonts.smaller,
    },

    'container-big':{
        width: 320
    },

    'contanier-medium': {
        width: 200
    },

    'container-small':{
        width: 150
    },

});

export default styles;