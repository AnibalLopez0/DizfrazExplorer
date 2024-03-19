import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { ButtonsLogin, Subtitle2 } from './Styles';
import ListProductHS from './ListProductHS';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Paso 1: Importar axios

function Ticket() {
  const route = useRoute();
  const { dineroRecibido, totalPrecio, currentDateTime } = route.params;
  const [productos, setProductos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Paso 2: Definir la función obtenerProductos
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('https://snek22.000webhostapp.com/productos.php');
        if (response.status === 200) {
          setProductos(response.data);
        } else {
          console.error('Error al obtener productos');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    obtenerProductos(); // Llama a obtenerProductos al cargar el componente
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('./Images/background.png')}
        style={{ width: '100%', height: '100%' }}>
        <View style={{ marginTop: '10%', marginLeft: '5%' }}>
          <Text style={Subtitle2}> NUMERO DE COMPRA</Text>
          <Text style={[Subtitle2, { marginTop: -20, marginLeft: '60%' }]}> {currentDateTime}</Text>
        </View>

        <View style={{ height: '50%', marginTop: '5%', marginLeft: '2%' }}>
          <FlatList
            data={productos}
            keyExtractor={(item) => item.id} // Asegúrate de que cada producto tenga una propiedad 'id' única
            renderItem={({ item, index }) => <ListProductHS item={item} />}
            ItemSeparatorComponent={() => <View style={{ marginTop: 10 }}></View>}
          />
        </View>
        <View style={{ marginTop: '3%', marginLeft: '10%' }}>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>TOTAL</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '75%' }]}>{totalPrecio}</Text>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>RECIBIDO</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '75%' }]}>{dineroRecibido}</Text>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>CAMBIO</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '75%' }]}>$$$</Text>
        </View>
        <View style={{ marginTop: '7%', marginLeft: '10%' }}>
          <TouchableOpacity style={ButtonsLogin}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Inventario' }],
            })}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginLeft: '20%', marginTop: 10, }}>VOLVER AL INVENTARIO</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Ticket;
