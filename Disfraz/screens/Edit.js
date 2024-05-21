import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, Alert } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Edit = ({ route }) => {
  const { producto } = route.params;
  const navigation = useNavigation();

  const [nombre, setNombre] = useState(producto.nombre || '');
  const [descripcion, setDescripcion] = useState(producto.descripcion || '');
  const [stock, setStock] = useState(producto.stock.toString() || '');
  const [precio, setPrecio] = useState(producto.precio.toString() || '');
  const [precioPublico, setPrecioPublico] = useState(producto.precio_publico.toString() || '');
  const [talla, setTalla] = useState(producto.Talla || '');
  const [categoria, setCategoria] = useState(producto.categoria.toString() || '');

  const enviarDatos = async (productoId) => {
    console.log("id: " + productoId);
    console.log("nombre: " + nombre);
    console.log("stock: " + stock);
    console.log("precio: " + precio);
    console.log("precio_publico: " + precioPublico);
    console.log("talla: " + talla);
    console.log("descripcion: " + descripcion);
    console.log("categoria: " + categoria);

    try {
      const response = await axios.post('https://snek22.000webhostapp.com/editarproducto.php', {
        id_producto: productoId,
        nombre: nombre,
        stock: stock,
        precio: precio,
        precio_publico: precioPublico,
        talla: talla,
        descripcion: descripcion,
        categoria: categoria
      });
      Alert.alert('Éxito producto editado correctamente');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Inventario' }],
      });
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log(error.message);
    }
  };



  return(
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: '100%', height: '100%'}}>
      <ScrollView>
      <View style={{ marginLeft: '20%', marginTop: '3%' }}>
  {producto.imagen ? (
    <Image source={{ uri: producto.imagen }} style={{ width: 250, height: 250 }} />
  ) : (
    <Icons name="eye" color={'pink'} size={250} />
  )}
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
        value={precioPublico}
        onChangeText={setPrecioPublico}></TextInput>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>Talla</Text>
        <TextInput 
        placeholder= {producto.Talla !== null ? producto.talla : 'Indefinido'}
        placeholderTextColor={'#000000'}
        style={Input}
        value={talla}
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
              enviarDatos(producto.id_producto);
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