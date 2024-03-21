import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const ProductRegister = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');
  const [precioPublico, setPrecioPublico] = useState('');
  const [talla, setTalla] = useState('');
  const [categoria, setCategoria] = useState('');

  const enviarDatos = async () => {
    try {
      const url = 'https://snek22.000webhostapp.com/insertarproducto.php';

      const producto = 
        {
          categoria: categoria,
          nombre: nombre,
          descripcion: descripcion,
          precio: parseFloat(precio),
          stock: parseInt(stock) ,
          talla: parseInt(talla),
          precioPublico: parseFloat(precioPublico)
        };
  
      const response = await axios.post(url, { productos: [producto] });

      console.log('Datos enviados correctamente:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error, categoria, nombre,
      descripcion, precio, stock, talla, precioPublico);
    }
  };


  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('./Images/background.png')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={{marginLeft: '25%', marginTop: '3%'}}>
          <Icons name="eye" color={'#B41C65'} size={200} />
        </View>
        <ScrollView style={{width: '100%', height: '100%'}}>
          <View>
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>NOMBRE</Text>
            <TextInput
              placeholder='NOMBRE'
              placeholderTextColor={'#000000'}
              style={Input}
              value={nombre}
              onChangeText={setNombre}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CANTIDAD</Text>
            <TextInput
              placeholder='CANTIDAD'
              placeholderTextColor={'#000000'}
              keyboardType='numeric'
              style={Input}
              value={stock}
              onChangeText={setStock}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO</Text>
            <TextInput
              placeholder='PRECIO'
              keyboardType='numeric'
              placeholderTextColor={'#000000'}
              style={Input}
              value={precio}
              onChangeText={setPrecio}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO AL PUBLICO</Text>
            <TextInput
              placeholder='PRECIO AL PUBLICO'
              keyboardType='numeric'
              placeholderTextColor={'#000000'}
              style={Input}
              value={precioPublico}
              onChangeText={setPrecioPublico}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TALLA</Text>
            <TextInput
              placeholder='TALLA'
              placeholderTextColor={'#000000'}
              style={Input}
              value={talla}
              onChangeText={setTalla}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CATEGORIA</Text>
            <TextInput
              placeholder='CATEGORIA'
              placeholderTextColor={'#000000'}
              style={Input}
              value={categoria}
              onChangeText={setCategoria}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>DESCRIPCION</Text>
            <TextInput
              placeholder='DESCRIPCION'
              placeholderTextColor={'#000000'}
              style={Input}
              value={descripcion}
              onChangeText={setDescripcion}
            />
          </View>
          <View style={{marginTop: '5%'}}>
            <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Inventario' }],
            })}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225, marginBottom: '10%'}]}
            onPress={enviarDatos}>
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );  
}

export default ProductRegister