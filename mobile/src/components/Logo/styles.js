import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        width: 170,
        height: 170,
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
        width: '100%',
    },

    'image-row': {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
    },

    'direction-column': {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    'image-column': { 
        resizeMode: 'stretch',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;