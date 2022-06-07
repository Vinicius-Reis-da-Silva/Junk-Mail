
import { Text, View, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { colors } from "../../styles";

export default function IntroductionBegin(){
    return (
        <View style={ styles.container }>
            <View style={ styles.logoComplete }>
                <Image style={ styles.imageLogo } source={require('../../assets/image/logo-reciclagem-eletronica.png')} />
                <Text style={ styles.nameApp }>Junk Mail</Text>
                <Text style={ styles.description }>
                    Esse App vai auxiliar você a fazer o descarte correto do seu lixo eletrônico.
                </Text>
            </View>
            <AntDesign.Button 
            name="rightcircle" 
            backgroundColor='transparent' 
            size={40} 
            color={ colors.primary } 
            />    
        </View>
    );
}

