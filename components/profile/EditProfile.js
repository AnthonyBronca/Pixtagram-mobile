import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.text}>Edit Profile</Text>
            </View>
            <View style={styles.tinyButton}>
                <Image style={styles.discover} source={require('../../assets/discover.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginLeft: 5,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'rgb(25,25,25)',
        height: 30,
        width: '86%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginLeft: 2
    },
    text: {
        color: 'white',
        fontWeight: '500',
    },
    tinyButton: {
        backgroundColor: 'rgb(25,25,25)',
        marginLeft: 8,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    discover: {
        height: 17,
        width: 17
    }

})
export default EditProfile;
