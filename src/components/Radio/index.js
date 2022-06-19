import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Radio = ({
    optionsLabel = [],
    horizontal = false,
    onChangeSelect,
    selected
}) => {

    return (
        <View style={ horizontal? styles.horizontal : styles.vertical }>
            {
            optionsLabel.map( (itemOption, index) => (
                <TouchableOpacity 
                    onPress={ () => onChangeSelect(itemOption, index) } 
                    style={[ styles.radioContainer, {marginLeft: horizontal? 10 : 0, marginTop: horizontal? 0 : 10} ]}
                    key={itemOption}
                > 
                    <View style={ styles.outlineCircle }>
                        { selected === itemOption && <View style={ styles.innerCircle } />}
                    </View>
                    <Text style={[ styles.textLabel, {color: selected === itemOption ? '#000000' : '#717171'} ]} >
                        {itemOption}
                    </Text>
                </TouchableOpacity>
            ))
            }
        </View>
    );
};

export default Radio;

