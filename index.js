import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store';
import React from 'react';
import OneSignal from 'react-native-onesignal';
import firebase from '@react-native-firebase/app';

let firebaseConfig = {
  apiKey: 'AIzaSyApF-rPOzNJU14tXf1Q5okR0PQucOlJLFE',
  authDomain: 'twelfth-d2096.firebaseapp.com',
  databaseURL: 'https://twelfth-d2096.firebaseio.com',
  projectId: 'twelfth-d2096',
  storageBucket: 'gs://twelfth-d2096.appspot.com',
  messagingSenderId: '1056108562158	',
  appId: '1:1056108562158:android:e7a58c3b596fdb2ec895ff',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// OneSignal Initialization
OneSignal.setAppId('60c45532-b58a-445b-949f-c011e8a3a0ac');

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse();

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  notificationReceivedEvent => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notificationReceivedEvent,
    );
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  },
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification);
});

let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK
OneSignal.setExternalUserId(externalUserId);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
