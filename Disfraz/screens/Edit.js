import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Background, Title, Input} from './Styles';


function Edit() {
  return(
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: '100%', height: '100%'}}>
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
                      marginTop: -65}}>EDITAR</Text>
      </View>
      <View>
        <Image source={require('./Images/Pink Eye.png')}
        style={{
          width: 250,
          height: 250,
          marginLeft: 80,
          marginTop: -20
        }}></Image>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View>
          <Text style={{
            fontSize: 36,
            color: '#FFFFFF', 
            fontWeight: '800', 
            marginLeft: 15
          }}>NOMBRE</Text>
          <TextInput style={Input}></TextInput>
          <Text style={{
            fontSize: 36,
            color: '#FFFFFF', 
            fontWeight: '800',
            marginLeft: 15 
          }}>CANTIDAD</Text>
          <TextInput style={Input}></TextInput>
          <Text style={{
            fontSize: 36,
            color: '#FFFFFF', 
            fontWeight: '800', 
            marginLeft: 15
          }}>PRECIO</Text>
          <TextInput style={Input}></TextInput>
          <Text style={{
            fontSize: 36,
            color: '#FFFFFF', 
            fontWeight: '800', 
            marginLeft: 15
          }}>PRECIO AL PUBLICO</Text>
          <TextInput style={Input}></TextInput>
          <Text style={{
            fontSize: 36,
            color: '#FFFFFF', 
            fontWeight: '800',
            marginLeft: 15 
          }}>DESCRIPCION</Text>
          <TextInput style={Input}></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={{
            width: '30%',
            height: '25%',
            backgroundColor: '#B41C65',
            marginBottom: '10%',
            borderRadius: '50',
            fontSize: '80',
            fontWeight: 'bold'}}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            width: '30%',
            height: '25%',
            backgroundColor: '#B41C65',
            marginBottom: '10%',
            borderRadius: '50',
            fontSize: '80',
            fontWeight: 'bold'
          }}>TERMINAR</Text>
        </TouchableOpacity>
      </ScrollView>   
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Edit;