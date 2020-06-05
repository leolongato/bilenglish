import React from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import AppLogo from '../../../assets/bilenglish-logo.png';
import { Container, Input, StyledText, Button, ButtonTitle, Logo } from './styles';

import Teste from '../InitialTest/index';

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView behavior="padding">
      <Container>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Logo source={AppLogo}/>
            <StyledText>Bem vindo(a)!</StyledText>
            <Input placeholder="Email"/>
            <Input placeholder="Senha" secureTextEntry={true}/>
            <Button onTouchEndCapture={() => navigation.navigate('Teste')}><ButtonTitle>Registrar-se</ButtonTitle></Button>
      </Container>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default Login;