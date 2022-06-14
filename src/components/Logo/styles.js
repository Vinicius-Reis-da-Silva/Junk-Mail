import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
    },

    imageLogo: {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
    },

    textLogo: {
        fontFamily: fonts.family,
        fontSize: fonts.bigger,
        color: colors.black,
    },

    'direction-row': {
        alignSelf: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 30,
        paddingVertical: 10,
    },

    'image-row': {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
    },

    'direction-column': {
        flexDirection: 'column',
        marginTop: '20%'
    },

    'image-column': {
        width: 170,
        height: 170,
        resizeMode: 'stretch',
    }
});

export default styles;