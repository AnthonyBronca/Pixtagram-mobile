import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signedInUser } from '../../data/user';






const Header = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ marginLeft: 15, flexDirection: 'row' }}>
                <Text style={styles.name}>{signedInUser.username}</Text>
                <View style={styles.notificationBackground}>
                    <Text style={styles.notifications}>9+</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.push('NewPostScreen')}>
                    <Image
                        source={require('../../assets/plus.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ marginRight: 30, width: 23, height: 30, marginLeft: 6 }} source={require('../../assets/white-hamburger.png')} />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    name: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },
    notifications: {
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: '700',
        fontSize: 14
    },
    notificationBackground: {
        backgroundColor: 'red',
        borderRadius: 30,
        borderWidth: 3,
        // paddingLeft: 1,
        // paddingRight: 1,
        marginLeft: 3,
        height: 23,
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})

export default Header;
