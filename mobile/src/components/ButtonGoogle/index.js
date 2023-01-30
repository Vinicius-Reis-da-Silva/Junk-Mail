import React from 'react';
import { Text, TouchableOpacity, Image } from "react-native";

import styles from './styles';

const imgIconGoogle = require('../../assets/image/logoGoogle.png');

const ButtonGoogle = () => (
    <TouchableOpacity 
        style={ styles.container } 
        onPress={ () => console.log('entrou com o google') }
    >
        <Text style={ styles.text }>Fazer login com o Google</Text>
        <Image
            source={ imgIconGoogle }
            style={ styles.iconImage }
        /> 
    </TouchableOpacity>
);

export default ButtonGoogle;
