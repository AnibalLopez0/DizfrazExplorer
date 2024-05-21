import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons } from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

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
  const [imagen, setImagen] = useState(producto.imagen || '');
  const [imagenNueva, setImagenNueva] = useState(null);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        setImagen(uri);
        setImagenNueva(response.assets[0]);
      }
    });
  };

  const enviarDatos = async (productoId) => {
    console.log("id: " + productoId);
    console.log("nombre: " + nombre);
    console.log("stock: " + stock);
    console.log("precio: " + precio);
    console.log("precio_publico: " + precioPublico);
    console.log("talla: " + talla);
    console.log("descripcion: " + descripcion);
    console.log("categoria: " + categoria);

    const formData = new FormData();
    formData.append('id_producto', productoId);
    formData.append('nombre', nombre);
    formData.append('stock', stock);
    formData.append('precio', precio);
    formData.append('precio_publico', precioPublico);
    formData.append('talla', talla);
    formData.append('descripcion', descripcion);
    formData.append('categoria', categoria);
    if (imagenNueva) {
      const uriParts = imagenNueva.uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
      formData.append('imagen', {
        uri: imagenNueva.uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
    }

    try {
      const response = await axios.post('https://snek22.000webhostapp.com/editarproducto.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('./Images/background.png')}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <TouchableOpacity onPress={pickImage} style={{ marginLeft: '20%', marginTop: '3%' }}>
            {imagen ? (
              <Image source={{ uri: imagen }} style={{ width: 250, height: 250 }} />
            ) : (
              <Icons name="eye" color={'pink'} size={250} />
            )}
          </TouchableOpacity>
          <View style={{ padding: '5%' }}>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>NOMBRE</Text>
            <TextInput
              placeholder={producto.nombre}
              placeholderTextColor={'#000000'}
              style={Input}
              value={nombre}
              onChangeText={setNombre}></TextInput>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>CANTIDAD</Text>
            <TextInput
              placeholder={producto.stock.toString()}
              placeholderTextColor={'#000000'} keyboardType='numeric'
              style={Input}
              value={stock}
              onChangeText={setStock}></TextInput>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PRECIO</Text>
            <TextInput
              placeholder={producto.precio.toString()}
              keyboardType='numeric'
              placeholderTextColor={'#000000'}
              style={Input}
              value={precio}
              onChangeText={setPrecio}></TextInput>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PRECIO AL PUBLICO</Text>
            <TextInput
              keyboardType='numeric'
              placeholder={producto.precio_publico.toString()}
              placeholderTextColor={'#000000'}
              style={Input}
              value={precioPublico}
              onChangeText={setPrecioPublico}></TextInput>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>Talla</Text>
            <TextInput
              placeholder={producto.Talla !== null ? producto.Talla : 'Indefinido'}
              placeholderTextColor={'#000000'}
              style={Input}
              value={talla}
              onChangeText={setTalla}></TextInput>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>Categoria</Text>
            <TextInput
              placeholder={producto.categoria.toString()}
              placeholderTextColor={'#000000'}
              style={Input}
              value={categoria}
              onChangeText={setCategoria}></TextInput>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>Descripción</Text>
            <TextInput
              placeholder={producto.descripcion}
              placeholderTextColor={'#000000'}
              style={Input}
              value={descripcion}
              onChangeText={setDescripcion}></TextInput>
          </View>
          <View style={{ marginTop: '5%', marginBottom: '10%' }}>
            <TouchableOpacity style={[ButtonsNormal, { marginLeft: 25, }]}
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Inventario' }],
              })}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, { marginTop: -35, marginLeft: 225 }]}
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
