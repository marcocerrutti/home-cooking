import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from "../config/styles";

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.conainer}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
            />}

            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text} {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,    
    },
    conainer: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    }, 
    
})

export default AppTextInput;