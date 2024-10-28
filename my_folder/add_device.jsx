import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from './components/header.jsx'; // Updated import to match convention
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const AddDevice = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AddDevice</Text>
        </View>
    );
}

export default AddDevice;

const styles = StyleSheet.create ({
    text: {
        fontSize: 12,
    }
})