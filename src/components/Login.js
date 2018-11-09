import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text, Container, Content, Header, Footer, Form, Item, Input, H1 } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
      }
    onButtonPress(){
        console.log(this.state.username)
        console.log(this.state.password)
        this.props.navigation.navigate('DashBoard')
    }

    render(){
        return (
            <Container>
                <Content>
                    
                    <Form style={{alignItems:'center'}}>
                    <H1>Login</H1>
                        <Item>
                            <Input placeholder="Username" onChangeText={(text) => this.setState({username: text})}/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password" onChangeText={(text) => this.setState({password: text})}/>
                        </Item>
                        <Button block success style={{margin:15}} onPress={this.onButtonPress.bind(this)}>
                            <Text>Login</Text>
                        </Button>
                    </Form>

                </Content>
                <Footer />
          </Container>
        );
    }
}

