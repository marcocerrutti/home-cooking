import React from 'react';
import { Text } from 'react-native';

//import styles from './styles';
import defaultStyles from './styles'

function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>{ children}</Text>
    );
}


export default AppText;