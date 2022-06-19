import react from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const CustomButton = ({ styleText, styleContainer, type, onPress, children,}) => {
    return(

        <TouchableOpacity 
            style={[styles.container, styleContainer, type ? styles[`button-${type}`] : {} ]} 
            onPress={onPress}
        >
            <Text style={[styles.text, styleText, type === 'mediumTertiary' ? { color: 'white'} : {}]} >
                { children }
            </Text>
        </TouchableOpacity>
    );
}


export default CustomButton;