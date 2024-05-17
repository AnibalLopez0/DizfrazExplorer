import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, Button,
ActivityIndicator} from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, ImagePicker } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';


const ProductRegister = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');
  const [precio_publico, setPrecioPublico] = useState('');
  const [Talla, setTalla] = useState('');
  const [categoria, setCategoria] = useState('');

  const [imageSource, setImageSource] = useState(null);
  const [proveedores, setProveedores] = useState([]);
  const [selectedProveedor, setSelectedProveedor] = useState('');


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
          Talla: Talla,
          precio_publico: parseFloat(precio_publico),
          id_proveedor: selectedProveedor
        };
  
      const response = await axios.post(url, { productos: [producto] });

      console.log('Datos enviados correctamente:', response.data);
      alert(nombre +' agregado correctamente');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Inventario' }],
      })
    } catch (error) {
      console.error('Error al enviar los datos:', error, categoria, nombre,
      descripcion, precio, stock, Talla, precio_publico);
      alert('Error al enviar producto');
    }
  };


  const navigation = useNavigation();

  const validarCampos = () => {
    if (!nombre || !stock || !precio || !precio_publico || 
        !Talla || !categoria || !descripcion) {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    return true;
  }

  const subirImagen = () => {
    ImagePicker.launchImageLibrary({
      title: 'Selecciona una imagen',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tomar foto',
      chooseFromLibraryButtonTitle: 'Elegir de la galería',
      quality: 0.5
    }, response => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de imagen');
      } else if (response.error) {
        console.log('Error al seleccionar imagen: ', response.error);
      } else {
        // La imagen seleccionada se muestra en la aplicación
        setImageSource({ uri: response.uri });
      }
    });
  };


  useEffect(() => {
      fetch('https://snek22.000webhostapp.com/mostrarproveedores.php')
          .then(response => response.json())
          .then(data => setProveedores(data))
          .catch(error => console.error('Error:', error));
  }, []);

 
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
              value={precio_publico}
              onChangeText={setPrecioPublico}
            />
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TALLA</Text>
            <TextInput
              placeholder='TALLA'
              placeholderTextColor={'#000000'}
              style={Input}
              value={Talla}
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
            <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>PROVEEDOR</Text>
            <Picker
                selectedValue={selectedProveedor}
                onValueChange={(itemValue, itemIndex) => setSelectedProveedor(itemValue)}
                style={{
                  backgroundColor: 'white',
                  width: '80%',
                  marginLeft: '2%'
                }}
            >
                {proveedores.map(proveedor => (
                    <Picker.Item
                        key={proveedor.id_proveedor}
                        label={`${proveedor.nombre} (${proveedor.correo}) (${proveedor.id_proveedor})`}
                        value={proveedor.id_proveedor}
                    />
                ))}
            </Picker>
          </View>
          {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {imageSource && <Image source={imageSource} style={{ width: 200, height: 200 }} />}
            <Button title="Seleccionar imagen" onPress={subirImagen} />
          </View> */}
          <View style={{marginTop: '5%'}}>
            <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Inventario' }],
            })}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225, marginBottom: '10%'}]}
            onPress={() => {
              if (validarCampos()) {
                enviarDatos();
              }
            }}>
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );  
}

export default ProductRegister