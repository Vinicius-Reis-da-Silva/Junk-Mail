import React from 'react';

import { Controller } from 'react-hook-form';
import Radio from '../Radio';

const ControlledRadio = ({
    control,
    name,
    rules = {},
    options = [],
    horizontal = false,
}) => {

    return(
        <Controller 
            control={ control }
            name={ name }
            rules={ rules }
            render={ ({ field: {value, onChange} }) => (
                <Radio
                    selected={ value } 
                    optionsLabel={ options }
                    horizontal={ horizontal }
                    onChangeSelect={ value => onChange(value) }
                />
            ) }
        />
    );
}

export default ControlledRadio;

