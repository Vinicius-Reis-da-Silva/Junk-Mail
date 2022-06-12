import react, { useState } from "react";
import { View, Text, Image} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import styles from "./styles";

const slides = [
    {
        key: '1',
        title: 'Junk Mail',
        description: 'Esse App vai auxiliar você a fazer o descarte correto do seu lixo eletrônico.',
        image: require('../../assets/image/logo-reciclagem-eletronica.png'),
        page: 'begin'
    },
    {
        key: '2',
        title: 'Realidade Atual',
        description: 'O Mundo está cada vez mais dominado pela tecnologia, é cada vez maior o número de aparelhos eletrônicos que são fabricados e consumidos pelas pessoas todos os dias. Uma das caracteristicas desses produtos é justamente a curta vida útil, sempre dando lugar a versões mais modernas.',
        image: require('../../assets/image/eletronicos-reaproventado-tutorial.png'),
        page: 'medium'
    },
    {
        key: '3',
        title: 'Matériais do E-Lixos',
        description: 'Os aparelhos que ficam obsoletos se tornam o chamado lixo eletrônico, e esses produtos como pilhas e baterias possuem produtos químicos e metais pesados em sua composição, que poluem o solo, os lençóis freáticos e contaminam as verduras e legumes.',
        image: require('../../assets/image/lixeira-eletronica.png'),
        page: 'end'
    }
];

export default function Intro() {

    const [showLogin, setShowLogin] = useState(false);

    function renderSlides({ item }){
        return(
            <View style={ styles.container } >
                <Image 
                    source={ item.image } 
                    style={ styles[`image-${item.page}`] } 
                />
                <Text 
                    style={ styles.title }
                >
                    { item.title }
                </Text>
                <Text 
                    style={ styles.description }
                >
                    { item.description }
                </Text>
            </View>
        );
    }

    function renderButtonDone() {
        return (
            <View style={ styles.containerButtonDone }>
                <Text style={ styles.textButtonDone }>
                    COMEÇA
                </Text>
            </View>
        );
    }

    if(showLogin){
        return(
            <Text>Entrou no Login</Text>
        );
    }else{
        return( 
            <AppIntroSlider 
                renderItem={ renderSlides }
                data={slides}
                activeDotStyle={ styles.activeDot }
                onDone={ () => { 
                    console.log('clicou em Próximo...');
                    setShowLogin(false);
                } }
                
                renderDoneButton={ renderButtonDone }
            />
        );
    }

}