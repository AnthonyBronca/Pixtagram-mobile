import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider, Input } from 'react-native-elements';
import LoginBottomTab from '../components/loginscreen/LoginBottomTab';
import LoginForm from '../components/loginscreen/LoginForm';

const InstagramLogo = 'https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png'

const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={{ height: 150, width: 200, resizeMode: 'contain' }}
                source={require('../assets/logo.png')} />
        </View>
        <LoginForm navigation={navigation} />
        <LoginBottomTab navigation={navigation} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 20,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 150,
    }
})

export default LoginScreen;
