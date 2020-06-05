import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

import { Feather } from '@expo/vector-icons'; 

import Constants from 'expo-constants';
import { ListTest, Item, Header, ButtonOpacity } from './styles';

import { Audio } from 'expo-av'

const DATA = [
  {
    id: '1',
    title: 'Questão 1',
    question: 'Como se fala "carro" em inglês ?',
    options: ['Car', 'Ship'],
    answer: 'Car',
    voice: false
  },
  {
    id: '2',
    title: 'Questão 2',
    question: 'Escute a pronuncia e selecione a resposta correta.',
    options: ['Hello','Hi'],
    answer: 'Hello',
    voice: true
  },
  {
    id: '3',
    title: 'Questão 3',
    question: 'Como se fala "maçã" em inglês ?',
    options: ['Apple','Mellon'],
    answer: 'Apple',
    voice: false
  },
];


export default function Teste({ navigation }) {
  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true 
    })
  }, []);

  async function playSound(){
    const sound = new Audio.Sound();

    const status = { 
      shouldPlay: false,
      rate: 1.0,
      shouldCorrectPitch: false,
      volume: 1.0,
      isMuted: false,
      isLooping: false,
    };

    await sound.loadAsync(require('../../../assets/Hello.mp3'), status, false);

    sound.playAsync();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Text>Teste inicial de conhecimentos!</Text>

        <Button title="Finalizar Teste"/>
      </Header>
      <ListTest
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => 
          <Item>
            <Text>{item.title}</Text>
            <Text>{item.question}</Text>
            { ( item.voice ? <Feather name="volume-2" size={24} color="black" onPress={() => playSound()}/> : <></> ) }
            {
              item.options.map((i) => <ButtonOpacity key={Math.random()}><Text>{i}</Text></ButtonOpacity>)
            }
          </Item>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});