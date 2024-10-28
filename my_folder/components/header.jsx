import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

export default function Header({ title , onIconPress, hasunreadNotifications }) {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Ionicons name="wifi" size={30} color='black' />
            <Text style={styles.title}>{title}</Text>   
            <TouchableOpacity onPress={() => router.push('/notifications')}>
                    <Ionicons name="notifications-outline" stye={styles.notification} size={30}color='black'/>
                    {hasunreadNotifications && <View style={styles.redDot} />}
            </TouchableOpacity>
            <StatusBar style='auto' />
        </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'white', // Or any other color
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },

    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },

    notification: {
        justifyContent: "center",
        alignItems: 'flex-end',
    },

    redDot: {
        position: 'absolute',
        backgroundColorcolor: 'red',
        top: 5,
        right: 5,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
    },

    iconContainer: {
        position: 'relative'
    }


});