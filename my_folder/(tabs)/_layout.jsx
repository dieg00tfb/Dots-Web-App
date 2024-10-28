// app/(tabs)/_layout.js
import { Tabs } from 'expo-router';
import Header from '../components/header';
import React, { useState } from 'react';
import { View , StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Index from '../index';
export default function Layout() {

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Tabs
                    screenOptions={{
                        headerShown: false, // Hide the header of each screen
                        tabBarStyle: {
                            backgroundColor: 'white',
                            height: 90,
                            borderTopWidth: 1,
                            borderTopColor: 'lightgrey',
                            borderTopWidth: 2,
                        },
                        tabBarLabelStyle: {
                            fontSize: 14,
                            color: 'white',
                        },

                        tabBarActiveTintColor: '#007BFF',
                        tabBarInactiveTintColor: '#888',
                    }}
                >
                    <Tabs.Screen 
                        name="home" 
                        options={{ 
                            headerShown: false,
                            tabBarLabel: 'Home', 
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name='home' size={30} color={'black'}/>
                            ),
                        }} 

                    />
                    <Tabs.Screen 
                        name="menu" 
                        options={{ 
                            tabBarLabel: 'Menu',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name='menu' size={30} color={'black'}/>
                            )
                        }} 
                    />
                </Tabs>
            </View>
        </View>
    );
}
const styles= StyleSheet.create ({
    container: {
        flex: 1
    },

    content: {
        flex: 1,
    }
})




