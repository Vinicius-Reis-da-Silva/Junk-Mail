import react from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { colors } from "../../styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import styles from "./styles";

export default function IntroductionEnd(){

    function clique(){
        console.log('Avançando... :)');
    }

    function clique2 (){
        console.log('Voltando...');
    }

    return(
        <View style={ styles.container } >
            <Logo direction='row' />
            <Text style={ styles.description } >Os aparelhos que ficam obsoletos se tornam o chamado lixo eletrônico, e esses produtos como pilhas e baterias possuem produtos químicos e metais pesados em sua composição, que poluem o solo, os lençóis freáticos e contaminam as verduras e legumes.</Text>
            <Image source={ require('../../assets/image/lixeira-eletronica.png') } style={ styles.image } />
            <Button type='medium' onPress={clique} >Vamos Começar</Button>
            <View style={ styles.containerIcons } >
                <AntDesign.Button name='leftcircle' size={40} color={ colors.primary } backgroundColor='transparet' onPress={clique2} />
                <AntDesign.Button name='rightcircle' size={40} color={ colors.primary } backgroundColor='transparet' onPressIn={clique} />
            </View>
        </View>
    );
}