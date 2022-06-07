import { View, Text, Image } from "react-native";
import styles from "./styles";

const Logo = () => {
    return (
        <View style={ styles.container }>
            <Image source={ require('../../assets/image/logo-reciclagem-eletronica.png') } style={ styles.imageLogo } />
            <Text style={ styles.textLogo }>Junk Mail</Text>
        </View>
    );
};

export default Logo;