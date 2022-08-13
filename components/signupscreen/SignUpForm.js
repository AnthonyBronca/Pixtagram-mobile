import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator'
import { Form, FormItem } from 'react-native-form-component'
import { firebase, db } from '../../firebase';

//npm install email-validator


const SignUpForm = ({ navigation }) => {

    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, "A username is required"),
        password: Yup.string().required().min(6, 'Your password has to have at least 8 characters')
    })


    const onSignUp = async (email, password, username) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('successful signup', email, password, username)
            db.collection('users').doc(authUser.user.email).set({
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
                profile_picture: 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png'
            })
        } catch (error) {
            console.log(error)
            Alert.alert('Error Signing Up', error.message)
        }
    }


    const [authentication, setAuthentication] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={(values) => {
                    onSignUp(values.email, values.password, values.username)
                }}
                validationSchema={SignUpFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, { borderColor: values.email.length < 1 || Validator.validate(values.email) ? 'rgb(8,8,8)' : 'red' }]}>
                            <TextInput
                                placeholderTextColor='rgb(155,155,155)'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                style={{ color: 'white' }}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}

                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: 1 > values.username.length || values.username.length >= 2
                                ? 'rgb(8,8,8)'
                                : 'red'
                        }]}>
                            <TextInput
                                placeholderTextColor='rgb(155,155,155)'
                                placeholder='Username'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                style={{ color: 'white' }}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}

                            />
                        </View>
                        <View style={[styles.inputField,
                        {
                            borderColor: 1 > values.password.length || values.password.length >= 6
                                ? 'rgb(8,8,8)'
                                : 'red'
                        }]}>
                            <TextInput
                                placeholderTextColor='rgb(155,155,155)'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                style={{ color: 'white' }}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 30, marginHorizontal: 10 }}>
                            <Pressable
                                onPress={() => console.log('pressed ForgotPassword')}
                            >
                                <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                            </Pressable>
                        </View>
                        <Pressable titleSize={20}
                            style={styles.loginInButton(isValid)}
                            title='Log In'
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText(isValid)}> Sign Up
                            </Text>
                        </Pressable>
                    </>
                )}
            </Formik>
        </View >
    );
}

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: 'rgb(8,8,8)',
        marginBottom: 10,
        borderWidth: 1,
        marginHorizontal: 10,
        color: 'white'
    },
    wrapper: {
        marginTop: 10
    },
    loginInButton: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#012F54',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginHorizontal: 10
    }),
    buttonText: (isValid) => ({
        fontWeight: 'bold',
        color: isValid ? '#fff' : 'rgb(160,160,160)',
        fontSize: 15,
    })
})

export default SignUpForm;
