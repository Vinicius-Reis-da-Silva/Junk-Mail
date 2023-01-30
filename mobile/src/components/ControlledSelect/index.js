import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { Controller } from 'react-hook-form';

import styles from './styles';
import { colors, fonts } from '../../styles';

const ControlledSelect = ({
    control,
    name = "",
    rules = {},
    data = [],
    onChangeSelect, 
    defaultSelectText="",
    type
}) => {

    return (
        <Controller 
            control={ control }
            name={ name }
            rules = { rules }
            render={ ({ field: { onChange, onBlur }, fieldState: {error} }) => (
                <SelectDropdown 
                    data={ data }
                    onSelect={ (itemSelect, index) => {
                        onChangeSelect(itemSelect, index)
                        onChange([itemSelect, index])
                    } }
                    defaultButtonText={ defaultSelectText }
                    onBlur={ onBlur }
                    buttonStyle={type ? styles[`containerSelect-${type}`] : styles.containerSelect}
                    buttonTextStyle={ type ? styles[`textSelect-${type}`] : styles.textSelect }
                    renderDropdownIcon={isOpened => {
                        return <AntDesign name={isOpened ? 'caretup' : 'caretdown'} color={colors.primary} size={fonts.regular} />;
                    }}
                    dropdownStyle={{borderRadius: 10}}
                />
            ) }
        />
    );
}

export default ControlledSelect;
