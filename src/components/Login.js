import React, { Component } from 'react';
import firebase from 'firebase'; 
import { Button, Text, Container, Content, Header, Footer, Form, Item, Input, H1 } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', error: ''};
      }
    onLoginPress(){
        console.log(this.state.email)
        console.log(this.state.password)

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>this.props.navigation.navigate('DashBoard'))
    }

    render(){
        return (
            <Container>
                <Content>
                    
                    <Form style={{alignItems:'center'}}>
                    <H1 style={{margin:10}}>Login</H1>
                        <Item>
                            <Input placeholder="Username" onChangeText={(text) => this.setState({email: text})}/>
                        </Item>
                        <Item last>
                            <Input secureTextEntry placeholder="Password" onChangeText={(text) => this.setState({password: text})}/>
                        </Item>
                        <Button block success style={{margin:15}} onPress={this.onLoginPress.bind(this)}>
                            <Text>Login</Text>
                        </Button>
                    </Form>

                </Content>
                <Footer />
          </Container>
        );
    }
}

