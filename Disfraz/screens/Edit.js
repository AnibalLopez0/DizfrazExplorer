import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function Edit({ route }) {
  const { producto } = route.params;
  const navigation = useNavigation();
  return(
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: '100%', height: '100%'}}>
      <ScrollView>
      <View style={{marginLeft: '25%', marginTop: '3%'}}>
      <Icons name="eye" color={'#B41C65'} size={200} />
      </View>
      <View style={{padding:'5%'}}>
      <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>NOMBRE</Text>
      <TextInput placeholder={producto.nombre} 
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CANTIDAD</Text>
        <TextInput placeholder={producto.stock}
  placeholderTextColor={'#000000'} keyboardType='numeric'
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO</Text>
        <TextInput placeholder={`$${producto.precio}`}
        keyboardType='numeric'
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO AL PUBLICO</Text>
        <TextInput placeholder={`$${producto.precio_publico}`}  
        keyboardType='numeric'
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TALLA</Text>
        <TextInput placeholder={producto.Talla !== null ? producto.Talla : 'Indefinido'}
  placeholderTextColor={'#000000'}
    style={Input}></TextInput>
      </View>
      <View style={{marginTop: '5%', marginBottom: '10%'}}>
        <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Inventario' }],
        })}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}>
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Edit;