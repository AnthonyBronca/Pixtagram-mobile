import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { Divider } from 'react-native-elements';
import { posts } from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import { firebase, db } from '../firebase'



const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <Stories />
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen;
