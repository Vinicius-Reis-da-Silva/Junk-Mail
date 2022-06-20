import React from "react";
import { View, Image, Text } from "react-native";
import { useForm } from 'react-hook-form';

import Logo from "../../components/Logo";
import ControlledInput from "../../components/ControlledInput";
import ControlledSelect from "../../components/ControlledSelect";
import CustomButton from "../../components/CustomButton";
import ButtonGoogle from "../../components/ButtonGoogle";
import styles from "./styles";

function onRegistrationPressed(data){
    console.log(data)
}

export default function CompanyRegistration(){

    const {control, handleSubmit, formState: {errors}} = useForm({});
    const callList = ['Pará', 'São Paulo', 'Rio de Janeiro', 'Goias', 'Mato Grosso', 'Maranhão', 'Minas Gerais', 'Baia', 'Ceára'];

    return(
        <View style={ styles.container }>
            <Logo direction={'column'} />
            
            <Text style={ styles.title }>Cadastrar Empresa</Text>
            
            <ControlledInput 
                control={ control }
                rules={{require: true}}
                name={"nameCompany"}
                placeholder={"Nome da Empresa"}
            />

            <ControlledInput 
                control={ control }
                rules={{require: true}}
                name={"email"}
                placeholder={"Email"}
            />
            
            <ControlledInput 
                control={ control }
                rules={{require: true}}
                name={"cnpj"}
                placeholder={"CNPJ"}
            />

            
            <ControlledInput 
                control={ control }
                rules={{require: true}}
                name={"phone"}
                placeholder={"Telefone"}
            />
            
            <View style={ styles.containerInputsLine }>
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
            secureTextEntry={true}
            />

            <CustomButton 
                type={'mediumPrimary'} 
                styleContainer={ styles.button } 
                onPress={ handleSubmit(onRegistrationPressed) }
            >
                Cadastrar
            </CustomButton>

            <ButtonGoogle />
        </View>
    );
}
