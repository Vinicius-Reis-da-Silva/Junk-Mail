import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        alignItems: 'center'
    },

    title: {
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 10,
    },

    containerInputsLine:{
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },

    button:{
        marginVertical: 20,
    }
});

export default styles;