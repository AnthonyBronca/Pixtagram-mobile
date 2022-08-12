import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';

const LoginBottomTab = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Divider width={.2} orientation={'horizontal'} />
            <View style={styles.textContainer}>
                <Text style={{ color: 'rgb(155,155,155)' }}>Don't have an account?</Text>
                <Pressable
                    onPress={() => navigation.push('SignUpScreen')}
                >
                    <Text style={styles.button}> Sign up.</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 190
    },
    button: {
        color: '#6BB0F5',
        fontWeight: '600'
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 19,
        zIndex: 999
    }
})

export default LoginBottomTab;
