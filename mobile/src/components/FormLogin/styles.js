import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles"; 


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 30,
    },

    title: {
        marginTop: 120,
        fontFamily: fonts.family,
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
    },

    buttonContainer: {
        marginVertical: 10,
        marginBottom: -10
    }
});

export default styles;