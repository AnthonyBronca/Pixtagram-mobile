import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator'
import { Form, FormItem } from 'react-native-form-component'
import { firebase } from '../../firebase'


//npm install email-validator

const LoginForm = ({ navigation }) => {




    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least 8 characters')
    })

    const onLogin = async (email, password) => {


        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('firebase login successful', email, password)
        } catch (error) {
            Alert.alert('Error Logging In', error.message + '\n\n If you do not have an account, Please click "Sign Up"',
                [
                    {
                        text: 'Try Again',
                        onPress: () => console.log('ok'),
                        style: 'cancel'
                    },
                    {
                        text: 'Sign Up',
                        onPress: () => navigation.push('SignUpScreen'),
                        style: 'default'
                    }
                ])
        }
    }


    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    onLogin(values.email, values.password)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, { borderColor: values.email.length < 1 || Validator.validate(values.email) ? 'rgb(8,8,8)' : 'red' }]}>
                            <TextInput
                                placeholderTextColor='rgb(155,155,155)'
                                placeholder='Phone number, username, or email'
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
                            <Text style={styles.buttonText(isValid)}> Log in
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

export default LoginForm;
