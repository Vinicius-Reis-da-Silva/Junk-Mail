import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import Logo from '../../components/Logo';
import FormLogin from '../../components/FormLogin';
import { ScrollView } from 'react-native';

export default function LoginUser() {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, }}>
        <Logo direction='column'/>
        <FormLogin />

        <TouchableOpacity style={ styles.buttonContainer }>
          <Text style={ styles.textButton }>Fazer login com o Google</Text>
          <AntDesign name="google" size={24} color="black" style={{ paddingHorizontal: 5}}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles['containerButton-registration']]}>
          <Text style={[ styles.textButton, styles['textButton-registration'] ]}>Não sou cadastrado.</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}