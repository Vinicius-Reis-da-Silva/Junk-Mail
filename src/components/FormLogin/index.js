import React from 'react';
import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form';

import styles from './styles';
import ControlledInput from '../ControlledInput';
import CustomButton from '../CustomButton';
import ControlledRadio from '../ControlledRadio';


function onSignInPressed(data) {
  console.log(data, data._getWatch('useType'));
}

const FormLogin = () => {

  const {control, handleSubmit, formState: {errors}} = useForm({});

  

  return (
    <View style={ styles.container } > 
        <Text style={ styles.title }>Login In</Text>

        <ControlledInput 
            name="email"
            placeholder="Email"
            control={ control }
            rules={{require: 'Email é obrigatorio'}}
        />

        <ControlledInput 
            name="password"
            placeholder="Senha"
            control={control}
            secureTextEntry
            rules={{ 
            required: 'Password is required',
            minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
            },
            }}
        />

        <ControlledRadio
          name="useType"
          control={control}
          options={["Usuário", "Empresa"]}
          horizontal={true}
        />

        <CustomButton type='mediumPrimary' onPress={ handleSubmit(onSignInPressed) }>Entra</CustomButton>
    </View>
  );
}


export default FormLogin;