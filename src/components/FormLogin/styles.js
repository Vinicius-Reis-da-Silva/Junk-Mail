import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles"; 


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 30,
    },

    title: {
        marginTop: 50,
        fontFamily: fonts.family,
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
    }


});

export default styles;