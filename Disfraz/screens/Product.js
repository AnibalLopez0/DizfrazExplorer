import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, 
Button} from 'react-native';
import {Buttons, ButtonsNormal, ButtonsNormal2, Subtitle2} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';


function Product(){
  return (
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: 1000, height: 1000}}>
        <View>
        <Icons name="eye" color={'pink'} size={350} />
        </View>
        <View style={{marginLeft: '2%'}}>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>NOMBRE</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CANTIDAD</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO AL PUBLICO</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TALLA</Text>
        </View>
        <View style={{marginTop: '5%'}}>
        <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}>
              <Text style={Buttons}>EDITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}>
              <Text style={Buttons}>VENDER</Text>
            </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

export default Product;