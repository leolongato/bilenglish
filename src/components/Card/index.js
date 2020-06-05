import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const Card = ({title, content, alternatives, answer}) => {
  return (
    <Container>
        <Text>{title}</Text>
        <View>
            <Text>{content}</Text>
            {/* <View style={{display: "flex", flexDirection: 'row', margin: 20}}>
                {alternatives.map((item) => 
                <TouchableOpacity style={{backgroundColor: '#00BFFF', padding: 20, margin: 15,borderRadius: 15, display: "flex",alignItems: "center"}}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>)
                }
            </View> */}
        </View>
    </Container>
  );
}

export default Card;