import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
const graph = require('../../assets/graph.png');
const play = require('../../assets/play.png');
const usertag = require('../../assets/usertag.png')

const ProfileIcons = () => {

    const [dividerColor, setDivierColor] = useState(graph);

    const icons = {
        graph: graph,
        play: play,
        usertag: usertag

    }

    const highlight = (icon) => {
        if (icon === graph) {
            setDivierColor(graph)
            console.log(dividerColor)
        }
        if (icon === play) {
            setDivierColor(play)
            console.log(dividerColor)
        }
        if (icon === usertag) {
            setDivierColor(usertag)
            console.log(dividerColor)
        }
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => highlight(graph)}>
                <Image style={styles.image} source={icons.graph} />
                {dividerColor === graph ? <Divider style={{ color: 'white' }} color={'rgb(255,255,255)'} width={1} height={3} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => highlight(play)}>
                <Image style={styles.image} source={icons.play} />
                {dividerColor === play ? <Divider style={{ color: 'white' }} color={'rgb(255,255,255)'} height={3} width={1} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => highlight(usertag)}>
                <Image style={styles.image} source={icons.usertag} />
                {dividerColor === usertag ? <Divider style={{ color: 'white' }} color={'rgb(255,255,255)'} height={3} width={1} /> : null}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        marginTop: 20
    },
    image: {
        height: 30,
        width: 30
    }
})

export default ProfileIcons;
