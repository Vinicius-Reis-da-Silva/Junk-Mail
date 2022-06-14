import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { Controller } from 'react-hook-form';
import styles from './styles';


const ControlledInput = ({ 
  control, 
  name, 
  rules = {},
  placeholder, 
  secureTextEntry,
  type
 }) => {

  return (
    <Controller 
      control={ control }
      name={ name }
      rules={ rules }
      render={ ({ field: { value, onChange, onBlur }, fieldState: {error} }) => (
        <>
          <View style={[
            styles.container,
            type ? styles[`${type}`] : {},
            {borderColor: error ? 'red' : "#717171"},
          ]}>
            <TextInput 
                value={ value }
                onChangeText={ onChange }
                onBlur={ onBlur }
                placeholder={ placeholder }
                style={ styles.input }
                secureTextEntry={ secureTextEntry }
            />
          </View>
          {error && (
            
            <Text style={ { color: 'red', alignSelf: 'stretch', fontSize: 16, fontFamily: 'Roboto' } }>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

export default ControlledInput;