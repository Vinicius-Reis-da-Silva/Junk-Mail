import react from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ styleText, styleContainer, type, onPress, children }) => {
    return(

        <TouchableOpacity 
            style={[styles.container, styleContainer, type ? styles[`button-${type}`] : {} ]} 
            onPress={onPress}
        >
            <Text style={[styles.text, styleText]} >
                { children }
            </Text>
        </TouchableOpacity>
    );
}

export default Button;