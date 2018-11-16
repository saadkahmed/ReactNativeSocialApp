import React, { Component } from 'react';
import firebase from 'firebase';
import { Container, Content, Button, Text, H1 } from 'native-base';

export default class Dashboard extends Component {
    onButtonPress(){
        console.log(firebase.auth)
    }
    render() {
        return (
            <Container>
                <Content>
                    <H1>Dashboard</H1>
                    <Button>
                        <Text> Press this</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}