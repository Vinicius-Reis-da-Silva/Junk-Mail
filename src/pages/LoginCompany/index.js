import React from "react";
import { View, Image, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Logo from "../../components/Logo";
import { colors } from "../../styles";
import styles from "./styles";

export default function IntroductionMedium(){
    return(
        <View style={ styles.container }>
                   
            <Logo direction='row' />
           
            <Text style={ styles.description } >
                O Mundo está cada vez mais dominado pela tecnologia, é cada vez maior o número de aparelhos eletrônicos que são fabricados e consumidos pelas pessoas todos os dias.  
            </Text>
            
            
            <Image source={ require('../../assets/image/eletronicos-reaproventado-tutorial.png') } style={ styles.image }/>

            <Text style={ styles.description }>
                Uma das caracteristicas desses produtos é justamente a curta vida útil, sempre dando lugar a versões mais modernas.
            </Text>
            
            <View style={ styles.containerIcons } >
                <AntDesign.Button name='leftcircle' size={40} color={ colors.primary } backgroundColor='transparet' />
                <AntDesign.Button name='rightcircle' size={40} color={ colors.primary } backgroundColor='transparet' />
            </View>
           
        </View>
    );
}
