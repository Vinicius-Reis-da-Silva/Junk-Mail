import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';

import ControlledInput from '../../components/ControlledInput';
import Logo from '../../components/Logo'
import ControlledSelect from '../../components/ControlledSelect';
import ButtonGoogle from '../../components/ButtonGoogle';
import styles from './styles';

function onRegistrationPressed(data){
  console.log(data)
}

export default function UserRegistration() {

  const {control, handleSubmit, formState: {errors}} = useForm({});

  const callList = ['Pará', 'São Paulo', 'Rio de Janeiro', 'Goias', 'Mato Grosso', 'Maranhão', 'Minas Gerais', 'Baia', 'Ceára'];

  return (
    <ScrollView style={ styles.container }>
      <Logo direction={'column'}/>

      <Text style={ styles.title }>Cadastrar usuário</Text>
      <View style={ styles.containerForm }>
        <ControlledInput 
          control={ control }
          rules={{require: true}}
          name="name"
          placeholder="Nome"
        />

        <ControlledInput 
          control={ control }
          rules={{require: true}}
          name="email"
          placeholder="Email"
        />

        <ControlledInput 
          control={ control }
          rules={{require: true}}
          name="phone"
          placeholder="Telefone"
        />

        <View style={{flexDirection: 'row', alignItems: 'center' }}>
          <ControlledInput 
            control={ control }
            rules={{require: true}}
            name="cep"
            placeholder="CEP"
            type="small"
          />

          <ControlledSelect 
            control={ control } 
            name="state"
            data={callList} 
            defaultSelectText={'Estado'}
            type={'transparent'}
            onChangeSelect={ (item) => console.log(`Você mudou a seleção ${item}`) }
          />
        </View>

        <ControlledInput 
          control={ control }
          rules={{require: true}}
          name="city"
          placeholder="Cidade"
        />
        
        <ControlledInput 
          control={ control }
          rules={{require: true}}
          name="password"
          placeholder="Crie uma senha"
        />
      </View>

      <TouchableOpacity style={ styles.containerButtonCadastrar } onPress={ handleSubmit(onRegistrationPressed) }>
        <Text style={ styles.textButtonCadastrar }>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <ButtonGoogle />
    </ScrollView>
  );
}