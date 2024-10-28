import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header.jsx';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.maincontainer}>
                <StatusBar barStyle="white" />
                <Header title="Dots"/>
                <View style={styles.mainscrollcontainer}>
                    
                    {/* Notifications Section */}
                    <View style={styles.notificationbox}>
                        <Text style={styles.texts}>Recent Notifications</Text>
                        <ScrollView contentContainerStyle={styles.notificationsscrollcontainer}>
                            <Text style={styles.title}>Motion Detected</Text>
                            <Text style={styles.info}>Time: 4:27pm  Location: Living Room</Text>
                        </ScrollView>
                    </View>

                    {/* Devices Section */}
                    <View style={styles.devices_box}>
                        <Text style={styles.devices}>Your Devices</Text>
                        <ScrollView contentContainerStyle={styles.devicescrollcontainer}>
                            <Text style={styles.title}>Dots 1</Text>
                            <Text style={styles.info}>Location: Office</Text>
                        </ScrollView>
                    </View>

                    {/* Add Devices Section */}
                    <View style={styles.add_devices_box}>
                        <Text style={styles.add_devices_text}>Add Device</Text>
                        <TouchableOpacity onPress={() => router.push('/add_device')}>
                            <AntDesign name="pluscircleo" style={styles.add_device_icon} size={50} color='black'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },
    

    mainscrollcontainer: {
        padding: 15,
        
    },

    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    notificationbox: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 20, // Adds spacing between sections
        height: 250,
        backgroundColor: 'lightgrey',
    },

    texts: {
        fontSize: 18,
        paddingBottom: 5,
        textAlign: 'center',
        fontFamily: "Poppins-Black",
        color: 'black'
    },

    notificationsscrollcontainer: {
        borderRadius: 20,
        padding: 10,
        height: 300,
        backgroundColor: 'white',
    },


    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    info: {
        textAlign: 'center',
        marginTop: 5,
        color: 'black',
    },

    devices_box: {
        borderRadius: 20,
        padding: 10,
        height: 170,
        backgroundColor: 'lightgrey',
    },

    devicescrollcontainer: {
        borderRadius: 20,
        padding: 10,
        height: 300,
        backgroundColor: 'white',
    },

    devices: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: "Poppins-Black",
        color: 'black'
    },

    add_devices_box: {
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10,
        height: 125,
        width: '50%',
        backgroundColor: 'lightgrey',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    add_devices_text: {
        textAlign: 'center',
        marginTop: 0,
        fontFamily: "Poppins-Black",
        color: 'black'
    },

    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,

    },

    add_device_icon: {
        alignItems: 'center',
        marginTop: 20,
    }

});
