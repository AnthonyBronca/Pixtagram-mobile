import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { Divider } from 'react-native-elements';


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/?id=1iF9PyJ2Thzo&size=2x&color=FFFFFF',
        inactive: 'https://img.icons8.com/?id=i6fZC6wuprSu&size=2x&color=FFFFFF'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/?id=59878&size=2x&color=FFFFFF',
        inactive: 'https://img.icons8.com/?id=132&size=2x&color=FFFFFF'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/?id=YoIaSvIehcuI&size=2x&color=FFFFFF',
        inactive: 'https://img.icons8.com/?id=PxI9IPCyBAOD&size=2x&color=FFFFFF'
    },
    {
        name: 'Profile',
        active: 'https://pixtagrambucket.s3.amazonaws.com/anthony_profile_pic_seeder.png',
        inactive: 'https://pixtagrambucket.s3.amazonaws.com/anthony_profile_pic_seeder.png'
    },
]



const BottomTabs = ({ icons, navigation }) => {
    let pointer = 'Home'
    const [activeTab, setActiveTab] = useState(pointer)

    const setBottomTab = (iconName, navigation) => {
        // setActiveTab(iconName);
        if (iconName === 'Profile') {
            console.log('que es', iconName)
            console.log(activeTab, 'whats active')
            pointer = 'Profile'
            // setActiveTab('Profile')
            console.log(activeTab, "this is active tab")
            navigation.push('ProfileScreen');
        }
        if (iconName === 'Home') {
            console.log('what is icone', iconName)
            setActiveTab(iconName)
            navigation.popToTop();
        }
    }




    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setBottomTab(icon.name, navigation)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[
                    styles.icon,
                    icon.name === 'Profile' ? styles.profilePic() : null,
                    activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,
                ]} />
        </TouchableOpacity>
    )
    return (
        <View>
            <Divider width={1} orientation={'vertical'} />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        padding: 10,
    },
    icon: {
        width: 30,
        height: 30
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff'
    })
})

export default BottomTabs;
