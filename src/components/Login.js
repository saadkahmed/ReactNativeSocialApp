import React, { Component } from 'react';
import firebase from 'firebase'; 
import { TouchableOpacity } from 'react-native';
import { Button, Text, Container, Content, Header, Footer, Form, Item, Input, H1 } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', error: ''};
      }

    static navigationOptions = {
        header: null,     
    };
    onLoginPress(){
        console.log(this.state.email)
        console.log(this.state.password)
        //this.props.navigation.navigate('DashBoard')

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>this.props.navigation.navigate('DashBoard'))
                .catch((e)=> this.setState( { error: e } ))
    }
    onForgotPress(){
        console.log('poop')
    }

    showError(){
        if(this.state.error){
            return(
                <Text style={{marginTop:10, color:'red'}}> * {this.state.error.message}</Text>
            )
        }
    }

    render(){
        return (
            <Container style={{justifyContent:'space-between', alignItems:'center'}}>
                <Form style={{alignItems:'center'}}>
                <H1 style={{marginTop:30}}>Login</H1>
                    <Item>
                        <Input placeholder="Username" onChangeText={(text) => this.setState({email: text})}/>
                    </Item>
                    
                    <Item last>
                        <Input secureTextEntry placeholder="Password" onChangeText={(text) => this.setState({password: text})}/>
                    </Item>
                    
                    {this.showError()}

                    <Button block style={{margin:15}} onPress={this.onLoginPress.bind(this)}>
                        <Text>Login</Text>
                    </Button>
                    <TouchableOpacity onPress={this.onForgotPress.bind(this)}>
                      <Text>Forgot your password? Click Here </Text>
                    </TouchableOpacity>
                </Form>
                <TouchableOpacity>
                   <Text style={{margin:15}}>Don't have an account? Click Here</Text>               
                </TouchableOpacity>
          </Container>
        );
    }
}

