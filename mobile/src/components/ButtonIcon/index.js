import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

const ButtonIcon = ({ styleImage, styleText, styleContainer, source, onPress}) => {


    return (
        <TouchableOpacity 
        style={ style} 
        onPress={ onPress }
        >
            <Image source={ source } style={ style } />
            <Text></Text>
        </TouchableOpacity>
    );
}

export default ButtonIcon;