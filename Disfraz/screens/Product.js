import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, 
Button} from 'react-native';
import {Buttons, ButtonsNormal, ButtonsNormal2, Subtitle2} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


function Product({ route }){
  const { producto } = route.params;
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: 1000, height: 1000}}>
        <View>
        <Icons name="eye" color={'pink'} size={350} />
        </View>
        <View style={{marginLeft: '2%'}}>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>NOMBRE: {producto.nombre}</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CANTIDAD: {producto.stock}</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO: ${producto.precio}</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO AL PUBLICO: ${producto.PrecioPublico}</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TALLA: {producto.Talla}</Text>
        </View>
        <View style={{marginTop: '5%'}}>
        <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}
        onPress={() => navigation.navigate("Editar", { producto})}>
              <Text style={[Buttons, {marginLeft:'22%'}]}>EDITAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}
            onPress={() => navigation.navigate("Venta", { producto})}>
              <Text style={[Buttons, {marginLeft:'20%'}]}>VENDER</Text>
            </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

export default Product;