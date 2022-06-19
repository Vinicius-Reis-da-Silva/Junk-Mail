import { StyleSheet } from "react-native"; 

import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        width: 250,
        backgroundColor: 'transparent',
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 10,
    },

    text: {
        fontFamily: fonts.family,
        fontSize: fonts.small,
        color: colors.black,
        fontWeight: '500'
    },

    iconImage: {
        marginLeft: 10,
        resizeMode: 'stretch',
        height: 24,
        width: 24,
    }
});

export default styles;