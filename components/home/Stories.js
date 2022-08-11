import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { users } from '../../data/users';



const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {users.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center', margin: 3 }}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={{ color: 'white', marginLeft: 4 }}>{
                            story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    }
})

export default Stories;
