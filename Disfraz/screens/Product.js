import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import {Buttons, ButtonsNormal, ButtonsNormal2, Subtitle2} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function Product({route}) {
  const {producto} = route.params;
  const [Elim, setElim] = useState(false);
  const navigation = useNavigation();

  const eliminar = async () => {
    try {
      const url = 'https://snek22.000webhostapp.com/eliminarproducto.php';
      const productoId = parseInt(producto.id_producto);
      const response = await axios.post(url, productoId);

      console.log(response.data);
  
      if (response.data === 'Producto eliminado correctamente') {
        console.log(response.data);
        console.log('Eliminado Correctamente');
        alert('Eliminado exitosamente');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Inventario' }],
        });
      } else {
        console.error('Error');
        console.log(response.data);
        alert('Error al eliminar');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('./Images/background.png')}
        style={{width: '100%', height: '100%'}}>
        <View>
          <TouchableOpacity
            style={{marginLeft: '80%'}}
            onPress={() => setElim(true)}>
            <Icons name="close" color={'red'} size={50} />
          </TouchableOpacity>
        </View>

        {Elim ? ( // Mostrar este View si Elim es true
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text
              style={[
                Subtitle2,
                {marginTop: 20, marginLeft: 10, fontSize: 20},
              ]}>
              ¿Estás seguro que deseas eliminar este producto?
            </Text>
            <TouchableOpacity
              onPress={() => setElim(false)}
              style={[ButtonsNormal, {marginTop: '20%', marginLeft: '50%'}]}>
              <Text style={[Buttons, {marginLeft: '7%'}]}>CANCELAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={eliminar}
              style={[ButtonsNormal2, {marginTop: '-8%', marginLeft: '-50%'}]}>
              <Text style={[Buttons, {marginLeft: '13%', fontSize:19}]}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Mostrar el contenido normal si Elim es false
          <View>
            <View style={{marginLeft: '20%', marginTop: '-8%'}}>
              <Icons name="eye" color={'pink'} size={250} />
            </View>

            <View style={{marginLeft: '2%', marginTop: '-6%'}}>
              <Text style={[Subtitle2, {marginTop: 20, marginLeft: 10}]}>
                NOMBRE: {producto.nombre}
              </Text>
              <Text style={[Subtitle2, {marginTop: 20, marginLeft: 10}]}>
                CANTIDAD: {producto.stock}
              </Text>
              <Text style={[Subtitle2, {marginTop: 20, marginLeft: 10}]}>
                CATEGORIA: {producto.categoria}
              </Text>
              <Text
                style={[
                  Subtitle2,
                  {
                    marginTop: 20,
                    marginLeft: 10,
                    maxWidth: '90%',
                    maxHeight: 100,
                    overflow: 'hidden',
                  },
                ]}>
                DESCRIPCION: {producto.descripcion}
              </Text>
              <Text style={[Subtitle2, {marginTop: 20, marginLeft: 10}]}>
                PRECIO: ${producto.precio}
              </Text>
              <Text style={[Subtitle2, {marginTop: 20, marginLeft: 10}]}>
                PRECIO AL PUBLICO: ${producto.precio_publico}
              </Text>
              <Text style={[Subtitle2, {marginTop: 20, marginLeft: 10}]}>
                TALLA: {producto.Talla !== null ? producto.Talla : 'Indefinido'}
              </Text>
            </View>

            <View style={{marginTop: '7%'}}>
              <TouchableOpacity
                style={[ButtonsNormal, {marginLeft: 25}]}
                onPress={() => navigation.navigate('Editar', {producto})}>
                <Text style={[Buttons, {marginLeft: '22%'}]}>EDITAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ButtonsNormal2, {marginTop: -35, marginLeft: 225}]}
                onPress={() => navigation.navigate('Venta', {producto})}>
                <Text style={[Buttons, {marginLeft: '20%'}]}>VENDER</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Product;
