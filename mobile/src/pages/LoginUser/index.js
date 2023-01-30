import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import Logo from '../../components/Logo';
import FormLogin from '../../components/FormLogin';
import { ScrollView } from 'react-native';
import ButtonGoogle from '../../components/ButtonGoogle';

export default function LoginUser() {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, }}>
          <Logo direction='column'/>

          <FormLogin />       

          <ButtonGoogle />

          <TouchableOpacity style={[styles.buttonContainer, styles['containerButton-registration']]}>
            <Text style={[ styles.textButton, styles['textButton-registration'] ]}>Não sou cadastrado.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
