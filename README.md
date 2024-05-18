aqui van los modulos que se instalaron

React navigation
https://www.youtube.com/watch?v=PmILHVEWZUY
https://reactnavigation.org/

React vector icons
https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file

React Native chart kit
https://github.com/indiespirit/react-native-chart-kit
npm install react-native-chart-kit

React Native HTML to pdf
npm install react-native-html-to-pdf

npm install react-native-fs




ESTE CODIGO PODRIA SERVIR


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons } from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const ProductRegister = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');
  const [precio_publico, setPrecioPublico] = useState('');
  const [talla, setTalla] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [proveedores, setProveedores] = useState([]);
  const [selectedProveedor, setSelectedProveedor] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://snek22.000webhostapp.com/mostrarproveedores.php')
      .then(response => response.json())
      .then(data => setProveedores(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const subirImagen = () => {
    const options = {
      title: 'Selecciona una imagen',
      mediaType: 'photo',
      quality: 0.5,
      maxWidth: 800,
      maxHeight: 800,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de imagen');
      } else if (response.errorCode) {
        console.log('Error al seleccionar imagen: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // La imagen seleccionada se muestra en la aplicación
        setImageSource(response.assets[0]);
      }
    });
  };

  const validarCampos = () => {
    if (!nombre || !stock || !precio || !precio_publico || !talla || !categoria || !descripcion) {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    return true;
  };

  const enviarDatos = async () => {
    if (!validarCampos()) {
      return;
    }

    setLoading(true);
    
    const formData = new FormData();
    formData.append('categoria', categoria);
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('precio', parseFloat(precio));
    formData.append('stock', parseInt(stock));
    formData.append('talla', talla);
    formData.append('precio_publico', parseFloat(precio_publico));
    formData.append('id_proveedor', selectedProveedor);
    
    if (imageSource) {
      formData.append('imagen', {
        uri: imageSource.uri,
        type: imageSource.type,
        name: imageSource.fileName
      });
    }

    try {
      const url = 'https://snek22.000webhostapp.com/insertarproducto.php';
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Datos enviados correctamente:', response.data);
      alert(nombre + ' agregado correctamente');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Inventario' }],
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Error al enviar producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require('./Images/background.png')} style={{ width: '100%', height: '100%' }}>
        <View style={{ marginLeft: '25%', marginTop: '3%' }}>
          <Icons name="eye" color={'#B41C65'} size={200} />
        </View>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <View style={{ marginLeft: '4%' }}>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>NOMBRE</Text>
            <TextInput placeholder='NOMBRE' placeholderTextColor={'#000000'} style={Input} value={nombre} onChangeText={setNombre} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>CANTIDAD</Text>
            <TextInput placeholder='CANTIDAD' placeholderTextColor={'#000000'} keyboardType='numeric' style={Input} value={stock} onChangeText={setStock} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PRECIO</Text>
            <TextInput placeholder='PRECIO' keyboardType='numeric' placeholderTextColor={'#000000'} style={Input} value={precio} onChangeText={setPrecio} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PRECIO AL PUBLICO</Text>
            <TextInput placeholder='PRECIO AL PUBLICO' keyboardType='numeric' placeholderTextColor={'#000000'} style={Input} value={precio_publico} onChangeText={setPrecioPublico} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>TALLA</Text>
            <TextInput placeholder='TALLA' placeholderTextColor={'#000000'} style={Input} value={talla} onChangeText={setTalla} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>CATEGORIA</Text>
            <TextInput placeholder='CATEGORIA' placeholderTextColor={'#000000'} style={Input} value={categoria} onChangeText={setCategoria} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>DESCRIPCION</Text>
            <TextInput placeholder='DESCRIPCION' placeholderTextColor={'#000000'} style={Input} value={descripcion} onChangeText={setDescripcion} />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PROVEEDOR</Text>
            <View style={{ width: 300, height: '8%', marginTop: 12, backgroundColor: '#FFFFFF', color: 'black', borderRadius: 40 }}>
              <Picker selectedValue={selectedProveedor} onValueChange={(itemValue) => setSelectedProveedor(itemValue)} style={{ backgroundColor: 'white', width: '90%', height: '6%', marginLeft: '5%', marginTop: '1.3%' }}>
                <Picker.Item label="Proveedor" value="" color="#000" />
                {proveedores.map(proveedor => (
                  <Picker.Item key={proveedor.id_proveedor} label={`${proveedor.nombre} (${proveedor.correo}) (${proveedor.id_proveedor})`} value={proveedor.id_proveedor} color="#000" />
                ))}
              </Picker>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              {imageSource && <Image source={{ uri: imageSource.uri }} style={{ width: 200, height: 200 }} />}
              <TouchableOpacity onPress={subirImagen} style={{ backgroundColor: '#B41C65', padding: 10, borderRadius: 5, marginTop: 10 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Seleccionar imagen</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: '5%' }}>
            <TouchableOpacity style={[ButtonsNormal, { marginLeft: 25 }]} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Inventario' }] })}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ButtonsNormal2, { marginTop: -35, marginLeft: 225, marginBottom: '10%' }]} onPress={enviarDatos}>
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
          </View>
          {loading && (
            <View style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -50 }, { translateY: -50 }] }}>
              <ActivityIndicator size="large" color="#B41C65" />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default ProductRegister;
