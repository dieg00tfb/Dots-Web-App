import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import axios from 'axios';  // Axios to send the token to your Django backend

// Configure how notifications should be presented when they are received
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  // Function to send the Expo Push Token to your backend
  const sendPushTokenToBackend = async (token) => {
    try {
      await axios.post('http://your-backend-url/api/register/', {
        token: token,
      });
      console.log('Push token sent to backend successfully.');
    } catch (error) {
      console.error('Failed to send push token to backend:', error);
    }
  };

  useEffect(() => {
    // Function to register for push notifications
    async function registerForPushNotificationsAsync() {
      let token;
      if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        // If permission not granted, request it
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }

        // If permission is still not granted, alert the user
        if (finalStatus !== 'granted') {
          Alert.alert('Failed to get push token for push notifications!');
          return;
        }

        // Get the Expo push token
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log('Expo Push Token:', token);
        setExpoPushToken(token);

        // Send the token to your backend for future notifications
        sendPushTokenToBackend(token);
      } else {
        Alert.alert('Must use physical device for Push Notifications');
      }

      // Set Android-specific notification channel
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    }

    registerForPushNotificationsAsync();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever the user taps on or interacts with a notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your expo push token: {expoPushToken}</Text>
    </View>
  );
}
