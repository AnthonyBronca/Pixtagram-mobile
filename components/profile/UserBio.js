import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signedInUser } from '../../data/user';


const UserBio = ({ navigation }) => {

    const handlePress = useCallback(async () => {
        // Open the custom settings if the app has one
        await Linking.openURL(`https://${signedInUser.website}`);
    }, []);


    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.header]}>{signedInUser.fullName}</Text>
            <Text style={styles.text}>{signedInUser.bio}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={[styles.text, styles.website]}>{signedInUser.website}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginLeft: 7,
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        fontSize: 14,
        padding: 1
    },
    header: {
        fontWeight: '700',
    },
    website: {
        color: '#89CFF0',
        fontSize: 14
    }
})

export default UserBio;
