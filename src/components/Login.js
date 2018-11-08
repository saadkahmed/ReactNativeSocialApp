import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
      }
    onButtonPress(){
        console.log(this.state.username)
        console.log(this.state.password)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>messago</Text>
                <TextInput style={styles.input}
                            placeholder="UserName"
                            onChangeText={(text) => this.setState({username: text})}/>
                <TextInput style={height=70}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({password: text})}/>
                <Button 
                            onPress={this.onButtonPress.bind(this)}
                            title="hello"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    input: {
        height: 55,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5
    }
})
