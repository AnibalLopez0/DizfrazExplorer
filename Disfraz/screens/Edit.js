import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, Alert } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Edit({ route }) {
  const { producto } = route.params;
  const navigation = useNavigation();

  const [nombre, setNombre] = useState(producto.nombre || ''); // Si producto.nombre está vacío, asigna ''
  const [descripcion, setDescripcion] = useState(producto.descripcion || ''); // Si producto.descripcion está vacío, asigna ''
  const [stock, setStock] = useState(producto.stock.toString() || ''); // Si producto.stock está vacío, asigna ''
  const [precio, setPrecio] = useState(producto.precio.toString() || ''); // Si producto.precio está vacío, asigna ''
  const [precio_publico, setprecio_publico] = useState(producto.precio_publico.toString() || ''); // Si producto.precio_publico está vacío, asigna ''
  const [Talla, setTalla] = useState(producto.Talla || ''); // Si producto.Talla está vacío, asigna ''
  const [categoria, setCategoria] = useState(producto.categoria || ''); // Si producto.categoria está vacío, asigna ''


  const EnviarDatos = async (productoId) => {
    console.log("id: " + productoId);
    axios.post('https://snek22.000webhostapp.com/editarproducto.php', {
      id_producto: productoId,
      nombre: nombre,
      stock: stock,
      precio: precio,
      precio_publico: precio_publico,
      Talla: Talla, 
      descripcion: descripcion,
      categoria: categoria
    })
    .then(response => {
      Alert.alert('Éxito producto editado correctamente');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Inventario' }],
      })
    })
    .catch(error => {
      Alert.alert('Error', error.message);
      console.log(error.message);
    });
  };



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
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
          NOMBRE</Text>
        <TextInput 
        placeholder= {producto.nombre}
        placeholderTextColor={'#000000'}
        style={Input}
        value= {nombre}
        onChangeText={setNombre}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CANTIDAD</Text>
        <TextInput 
        placeholder= {producto.stock}
        placeholderTextColor={'#000000'} keyboardType='numeric'
        style={Input}
        value={stock}
        onChangeText={setStock}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO</Text>
        <TextInput 
        placeholder= {producto.precio}
        keyboardType='numeric'
        placeholderTextColor={'#000000'}
        style={Input}
        value={precio}
        onChangeText={setPrecio}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PRECIO AL PUBLICO</Text>
        <TextInput  
        keyboardType='numeric'
        placeholder= {producto.precio_publico}
        placeholderTextColor={'#000000'}
        style={Input}
        value={precio_publico}
        onChangeText={setprecio_publico}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>Talla</Text>
        <TextInput 
        placeholder= {producto.Talla !== null ? producto.Talla : 'Indefinido'}
        placeholderTextColor={'#000000'}
        style={Input}
        value={Talla}
        onChangeText={setTalla}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>Categoria</Text>
        <TextInput 
        placeholder= {producto.categoria}
        placeholderTextColor={'#000000'}
        style={Input}
        value={categoria}
        onChangeText={setCategoria}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>Descripción</Text>
        <TextInput 
        placeholder= {producto.descripcion}
        placeholderTextColor={'#000000'}
        style={Input}
        value={descripcion}
        onChangeText={setDescripcion}></TextInput>
      </View>
      <View style={{marginTop: '5%', marginBottom: '10%'}}>
        <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Inventario' }],
        })}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}
             onPress={() => {
              EnviarDatos(producto.id_producto);
             }}>
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Edit;