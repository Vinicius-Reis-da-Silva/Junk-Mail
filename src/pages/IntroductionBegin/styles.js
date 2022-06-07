import { StyleSheet } from "react-native";
import { fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    // 
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingTop: 100,
    },

    logoComplete: {
        marginTop: 0.5,
        width: 270,
        height: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageLogo: {
        width: 269,
        height: 269,
        resizeMode: 'stretch',
    },

    nameApp: {
        fontFamily: fonts.family,
        fontSize: fonts.bigger,
        color: colors.black,
    },

    description: {
        width: 220,
        flexWrap: 'wrap',
        fontFamily: fonts.family,
        fontSize: fonts.regular,
        fontStyle: 'italic',
        color: '#717171',
        textAlign: 'center'
    },

});

export default styles;