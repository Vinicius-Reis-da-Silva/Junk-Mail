import { StyleSheet } from "react-native";

import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1 , 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
    },

    title: {
        fontFamily: fonts.family,
        fontSize: fonts.bigger,
        fontWeight: 'bold',
        color: colors.black, 
    },

    description: {
        width: '90%',
        flexWrap: 'wrap',
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontStyle: 'italic',
        color: '#717171',
        textAlign: 'center'
    },

    activeDot: {
        backgroundColor: colors.lightPrimary,
        width: 20
    },

    'image-begin': {
        resizeMode: 'stretch',
        width: 270,
        height: 270,
    },

    'image-medium': {
        width: 300,
        height: 220,
        resizeMode: 'stretch',
    },

    'image-end': {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },

    containerButtonDone: { 
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        backgroundColor: colors.darkPrimary,
        borderRadius: 20
    },

    textButtonDone: {
        fontFamily: fonts.family,
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.white,
    }
});

export default styles;