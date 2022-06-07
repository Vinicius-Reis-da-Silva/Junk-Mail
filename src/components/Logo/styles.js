import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: 200,
        height: 90,
    },

    imageLogo: {
        width: 90,
        height: 90,
    },

    textLogo: {
        fontFamily: fonts.family,
        fontSize: fonts.bigger,
        color: colors.black,
    }
});