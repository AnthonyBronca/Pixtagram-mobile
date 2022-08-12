import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider, Input } from 'react-native-elements';
import LoginBottomTab from '../components/loginscreen/LoginBottomTab';
import LoginForm from '../components/loginscreen/LoginForm';
import SignupBottomTab from '../components/signupscreen/SignupBottomTab';
import SignUpForm from '../components/signupscreen/SignUpForm';

const InstagramLogo = 'https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png'

const SignUpScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={{ height: 150, width: 200, resizeMode: 'contain' }}
                source={require('../assets/logo.png')} />
        </View>
        <SignUpForm navigation={navigation} />
        <SignupBottomTab navigation={navigation} />
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

export default SignUpScreen;
