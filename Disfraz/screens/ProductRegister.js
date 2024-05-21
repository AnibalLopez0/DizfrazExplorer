import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons } from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const ProductRegister = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');
  const [precio_publico, setPrecioPublico] = useState('');
  const [Talla, setTalla] = useState('');

  const [imageSource, setImageSource] = useState(null);
  const [proveedores, setProveedores] = useState([]);
  const [selectedProveedor, setSelectedProveedor] = useState('');

  const navigation = useNavigation();

  const cargarProveedores = () => {
    fetch('https://snek22.000webhostapp.com/mostrarproveedores.php')
      .then(response => response.json())
      .then(data => setProveedores(data))
      .catch(error => console.error('Error:', error));
  };

  useFocusEffect(
    React.useCallback(() => {
      cargarProveedores();
      return () => {};
    }, [])
  );

  const enviarDatos = async () => {
    try {
      const url = 'https://snek22.000webhostapp.com/insertarproducto.php';

      const formData = new FormData();

      formData.append('nombre', nombre);
      formData.append('descripcion', descripcion);
      formData.append('precio', parseFloat(precio));
      formData.append('precio_publico', parseFloat(precio_publico));
      formData.append('stock', parseInt(stock));
      formData.append('talla', Talla);
      formData.append('id_proveedor', selectedProveedor);

      if (imageSource) {
        formData.append('imagen', {
          uri: imageSource.uri,
          type: imageSource.type,
          name: imageSource.fileName,
        });
      }

      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Datos enviados correctamente:', response.data);
      Alert.alert('Éxito', `${nombre} agregado correctamente`);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Inventario' }],
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Alert.alert('Error', 'Error al enviar producto');
    }
  };

  const validarCampos = () => {
    if (!nombre || !stock || !precio || !precio_publico || !Talla || !descripcion || !selectedProveedor) {
      alert('Por favor, completa todos los campos y selecciona un proveedor.');
      return false;
    }
    return true;
  };

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
        setImageSource(response.assets[0]);
      }
    });
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require('./Images/background.png')} style={{ width: '100%', height: '100%' }}>
        <TouchableOpacity onPress={subirImagen}>
          <View style={{ marginLeft: '25%', marginTop: '3%' }}>
            {imageSource ? (
              <Image source={{ uri: imageSource.uri }} style={{ width: 200, height: 200 }} />
            ) : (
              <Icons name="eye" color={'#B41C65'} size={200} />
            )}
          </View>
        </TouchableOpacity>

        <ScrollView style={{ width: '100%', height: '100%' }}>
          <View style={{ marginLeft: '4%' }}>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>NOMBRE</Text>
            <TextInput
              placeholder="NOMBRE"
              placeholderTextColor={'#000000'}
              style={Input}
              value={nombre}
              onChangeText={setNombre}
            />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>CANTIDAD</Text>
            <TextInput
              placeholder="CANTIDAD"
              placeholderTextColor={'#000000'}
              keyboardType="numeric"
              style={Input}
              value={stock}
              onChangeText={setStock}
            />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PRECIO</Text>
            <TextInput
              placeholder="PRECIO"
              keyboardType="numeric"
              placeholderTextColor={'#000000'}
              style={Input}
              value={precio}
              onChangeText={setPrecio}
            />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>PRECIO AL PUBLICO</Text>
            <TextInput
              placeholder="PRECIO AL PUBLICO"
              keyboardType="numeric"
              placeholderTextColor={'#000000'}
              style={Input}
              value={precio_publico}
              onChangeText={setPrecioPublico}
            />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>TALLA</Text>
            <TextInput
              placeholder="TALLA"
              placeholderTextColor={'#000000'}
              style={Input}
              value={Talla}
              onChangeText={setTalla}
            />
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>DESCRIPCION</Text>
            <TextInput
              placeholder="DESCRIPCION"
              placeholderTextColor={'#000000'}
              style={Input}
              value={descripcion}
              onChangeText={setDescripcion}
            />
            <Text style={[Subtitle2, { marginTop: 18, marginLeft: 10 }]}>PROVEEDOR</Text>
            <View
              style={{
                width: 300,
                height: '9%',
                marginTop: 12,
                backgroundColor: '#FFFFFF',
                color: 'black',
                borderRadius: 40,
              }}
            >
              <Picker
                selectedValue={selectedProveedor}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedProveedor(itemValue);
                  navigation.navigate('ProductRegister'); // Navega a la misma pantalla para recargarla
                }}
                style={{
                  backgroundColor: 'white',
                  width: '90%',
                  height: '6%',
                  marginLeft: '5%',
                  marginTop: '1.3%',
                }}
              >
                <Picker.Item label="Proveedor" value="" color="#000" />
                {proveedores.map(proveedor => (
                  <Picker.Item
                    key={proveedor.id_proveedor}
                    label={`${proveedor.nombre} (${proveedor.correo}) (${proveedor.id_proveedor})`}
                    value={proveedor.id_proveedor}
                    color="#000"
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View style={{ marginTop: '5%' }}>
            <TouchableOpacity
              style={[ButtonsNormal, { marginLeft: 25 }]}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Inventario' }],
                })
              }
            >
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[ButtonsNormal2, { marginTop: -35, marginLeft: 225, marginBottom: '10%' }]}
              onPress={() => {
                if (validarCampos()) {
                  enviarDatos();
                }
              }}
              disabled={!selectedProveedor}
            >
              <Text style={Buttons}>TERMINAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProductRegister;
