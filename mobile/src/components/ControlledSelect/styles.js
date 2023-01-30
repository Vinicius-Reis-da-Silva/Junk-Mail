import { DynamicColorIOS, StyleSheet } from "react-native";

import { fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    containerSelect: {
        backgroundColor: colors.grey, 
        borderRadius: 10, 
        borderWidth: 0.5,
        marginHorizontal: 10, 
        width: 140, 
        height: 40,
    },

    textSelect: {
        fontFamily: fonts.family,
        fontSize: fonts.small,
        color: colors.black,
    },

    'containerSelect-transparent': {
        width: 140,
        height: 40,
        backgroundColor: 'transparent',
    },

    'textSelect-transparent': {
        fontSize: 18,
        color: colors.darkPrimary,
    }
});

export default styles;