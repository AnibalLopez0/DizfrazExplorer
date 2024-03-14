import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const ProductRegister = () => {
  return (
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{marginLeft: '25%', marginTop: '3%'}}>
      <Icons name="eye" color={'#B41C65'} size={200} />
      </View>
      <View>
      <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>NOMBRE</Text>
      <TextInput placeholder='NOMBRE' 
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CANTIDAD</Text>
        <TextInput placeholder='CANTIDAD' 
  placeholderTextColor={'#000000'} keyboardType='numeric'
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO</Text>
        <TextInput placeholder='PRECIO' keyboardType='numeric'
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO AL PUBLICO</Text>
        <TextInput placeholder='PRECIO AL PUBLICO'  keyboardType='numeric'
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TALLA</Text>
        <TextInput placeholder='TALLA' 
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
      </View>
      <View style={{marginTop: '5%'}}>
        <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}>
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ProductRegister