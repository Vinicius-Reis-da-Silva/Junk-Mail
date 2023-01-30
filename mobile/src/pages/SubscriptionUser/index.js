import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';

const imageLogo = require('../../assets/image/logo-reciclagem-eletronica.png');
const imageAd = require('../../assets/image/no.png');
const imageTips = require('../../assets/image/bate-papo.png');
const imageCourse = require('../../assets/image/curso-online.png');

export default function SubscriptionUser() {
    return (
        <View style={{ alignItems: "center", paddingHorizontal: 20 }}>

            <Logo direction={'row'} />
12
            <View style={ styles.description }>
                <TouchableOpacity style={ styles.buttonClose } onPress={ () => {} }>
                    <AntDesign  
                        name="close" 
                        size={25} 
                        color="white" 
                        onPress={ () => {} }     
                    />
                </TouchableOpacity>
                <View style={ styles.headerContainer }>
                    <Image source={ imageLogo } style={ styles.imageHeader } />
                    <Text style={ styles.textHeader }>Seja um Assinater Pro</Text>
                </View>
                <View style={ styles.itemContainer }>
                    <Image source={ imageAd } style={ styles.imageItem }/>
                    <Text style={ styles.textItem } >Acesso sem anúncio</Text>
                </View>
                <View style={ styles.itemContainer }>
                    <Image source={ imageTips } style={ styles.imageItem } />
                    <Text style={ styles.textItem } >Dicas de Reciclagem</Text>
                </View>
                <View style={ styles.itemContainer }>
                    <Image source={ imageCourse } style={ styles.imageItem } />
                    <Text style={ styles.textItem } >Cursos Exclusivos</Text>
                </View>
                <Text style={ styles.announcement }>Assinatura R$ 3,99 / mês</Text>
            </View>

            <CustomButton type={'mediumPrimary'}>Assinar</CustomButton>
        </View>
    );
}