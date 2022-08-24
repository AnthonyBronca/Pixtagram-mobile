import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import EditProfile from '../components/profile/EditProfile';
import Header from '../components/profile/Header'
import ProfileIcons from '../components/profile/ProfileIcons';
import UserBio from '../components/profile/UserBio';
import UserInfo from '../components/profile/UserInfo';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Photos from '../components/profile/Photos';
import {
    signedInUser

} from '../data/user';
const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}
        >
            <Header navigation={navigation} />
            <ScrollView>
                <UserInfo navigation={navigation} />
                <UserBio navigation={navigation} />
                <EditProfile navigation={navigation} />
                <ProfileIcons navigation={navigation} />
                <Photos navigation={navigation} />
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} navigation={navigation} />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },


})

export default ProfileScreen;
