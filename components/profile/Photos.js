import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { signedInUser } from '../../data/user';


const Photos = ({ navigation, post, index }) => {


    const image = {
        post: 'https://img.icons8.com/ios/344/like--v1.png'
    }
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {signedInUser.posts.map((post, index) => (
                    <Image key={index} style={{ width: 125, height: 125, }} source={{ uri: 'https://picsum.photos/200/300' }}></Image>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
    },
})

export default Photos;
