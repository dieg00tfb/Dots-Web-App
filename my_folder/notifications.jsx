import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';

const Notification = () => {
    const [users, setUsers] = useState([
        { id: 1, subject: 'Motion Detected', location: 'Bedroom', time: '4:24am'},
        { id: 2, subject: 'Motion Detected', location: 'Living Room', time: '7:52pm'},
        { id: 3, subject: 'Motion Detected', location: 'Kitchen', time: '12:18am'},
    ]);
    
    return(
        <View style={styles.maincontainer}>
                {users.map(item =>  (
                    <View key={item.id} style={styles.notificationcontainer}>
                        <Text style={styles.subject}>{item.subject}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                ))}
        </View>
    );
};
    


const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
 
        backgroundColor: 'white', // Light background for better visibility
        padding: 20,
    },

    notificationcontainer: {
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        marginBottom: 20,
        padding: 10, // Optional: Adjust padding for internal content
        width: '100%', // Set a specific width
        height: 100, // Set a specific height
    },

    subject: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Dark text color for contrast
        textAlign: 'center',
        fontFamily: "Poppins-Black"
    },

    location: {
        textAlign: 'center',
        fontSize: 17,
    },

    time: {
        textAlign: 'center',
        fontSize: 17,
    },  
});

export default Notification;
