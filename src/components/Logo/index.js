import React from 'react';
import { View, Text, Image } from "react-native";
import styles from "./styles";


const Logo = ({ direction }) => {
    return (
        
        <View style={ [styles.container, direction? styles[`direction-${direction}`] : {} ] }>
            <Image 
                source={ require('../../assets/image/logo-reciclagem-eletronica.png') } 
                style={[ styles.imageLogo, direction ? styles[`image-${direction}`] : {} ]} 
            />
            <Text style={[ styles.textLogo, { paddingVertical: -10 } ]}>
                Junk Mail
            </Text>
        </View>
    
    );
}

export default Logo;