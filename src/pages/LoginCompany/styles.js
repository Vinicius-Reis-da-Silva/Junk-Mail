import { StyleSheet } from "react-native";
import { fonts, colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    description: {
        width: 320,
        flexWrap: 'wrap',
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontStyle: 'italic',
        color: '#717171',
        textAlign: 'center'
    },

    image: {
        width: 300,
        height: 220,
        resizeMode: 'stretch',
    },

    containerIcons: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default styles;