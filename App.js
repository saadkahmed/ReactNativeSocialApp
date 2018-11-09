import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import LoginNavigator from './src/Navigators/LoginNavigator';

export default class App extends React.Component {
  
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
