import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        height: 90,
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
        flexDirection: 'row',
    },

    'direction-column': {
        flexDirection: 'column',
    },
});

export default styles;