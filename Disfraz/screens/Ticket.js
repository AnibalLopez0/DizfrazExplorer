import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Background, Title, Input} from './Styles';


function Ticket(){
  return(
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: '100%', height: '100%'}}>
      </ImageBackground>
      <View style={{ 
                    width: '100%',
                    height: 100,
                    marginTop: 30}}>
        <TouchableOpacity>
          <Image source={require('./Images/BackButton.png')}
            style={{
              width: 80,
              height: 80
            }}></Image>
        </TouchableOpacity>
        <Text style={{fontSize: 36,
                      color: '#F72798', 
                      fontWeight: '800',
                      marginLeft: 150,
                      marginTop: -65}}>TICKET</Text>
      </View>
    </SafeAreaView>
  );
}

export default Ticket;