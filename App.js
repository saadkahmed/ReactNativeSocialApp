import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import LoginNavigator from './src/Navigators/LoginNavigator';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBpsoM_8Jj_jQcnYu1NtbwQMO5hRFBEHCk',
      authDomain: 'transientapp-6156b.firebaseapp.com',
      databaseURL: 'https://transientapp-6156b.firebaseio.com',
      projectId: 'transientapp-6156b',
      storageBucket: 'transientapp-6156b.appspot.com',
      messagingSenderId: '930154575965'
    })
  }
  
  render() {
    return (
        <LoginNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
