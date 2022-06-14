import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        flexDirection: 'row',
        marginHorizontal: '15%',
        padding: 10,

        backgroundColor: 'transparent',
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 10,
    },
    
    textButton: {
        fontFamily: fonts.family,
        fontSize: fonts.small,
        color: colors.black,
        fontWeight: '700'
    },
    
    'containerButton-registration': {
        borderWidth: 0,
        backgroundColor: 'transparent',
    },

    'textButton-registration': {
        color: colors.darkPrimary,
        fontSize: fonts.regular,
        fontWeight: 'bold'
    }
});

export default styles;