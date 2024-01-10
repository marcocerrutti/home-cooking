

import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/Button';

function WelcomeScreen(props) {
    return (
        
        <ImageBackground 
            blurRadius={8}
            style={styles.background}
            source={require('../assets/background2.jpg')}

        >
            <View></View> 
            <Image resizeMode='contain' style={styles.logo} source={require("../assets/logo1.png")} />
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />
            </View>
            
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 30

    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#98FB98'
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems:"center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})
export default WelcomeScreen;