import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { signedInUser } from '../../data/user';

const UserInfo = () => {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Image style={styles.profilePic} source={require('../../assets/anthony.png')} />
                <View style={{ flexDirection: 'row', marginRight: 30, marginTop: 25 }} >
                    <View style={styles.info}>
                        <Text style={[styles.text, styles.number]}>{signedInUser.posts.length}</Text>
                        <Text style={styles.text}>Posts</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={[styles.text, styles.number]}>{signedInUser.followers.length}</Text>
                        <Text style={styles.text}>Followers</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={[styles.text, styles.number]}>{signedInUser.following.length}</Text>
                        <Text style={styles.text}>Following</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    text: {
        color: 'white',
        fontSize: 14
    },
    profilePic: {
        height: 90,
        width: 90,
        borderRadius: 50,
        marginLeft: 5
    },
    info: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20
    },
    number: {
        fontWeight: '600'
    }
})

export default UserInfo;
