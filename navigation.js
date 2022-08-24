import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';

/*

npm install npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install valid-url


navigation JS is created and the SignedInStack is passed to app.js. SignedInStack takes container and has a child of the nagiator.
navigator has children of each screen component you want to use
navigator can use 'navigator.push('screename') to add a component to the stack
navigator can use 'navigator.goBack()'  to send you back to the previous item in stack
^ use these in an onPress event
*/

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>

)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)
