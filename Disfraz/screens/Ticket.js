import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { ButtonsLogin, Subtitle2 } from './Styles';
import ListProductTicket from './ListProductTicket';
import productsData from './ListProduct';
import {eliminarTodosLosProductos, obtenerProductos } from './ListProduct';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

import ListFinal from './ListFinal';

function Ticket() {
  const route = useRoute();
  const navigation = useNavigation();
  const { dineroRecibido, totalPrecio, currentDateTime } = route.params;
  const [productos, setProductos] = useState([]);
  const [cambio, setCambio] = useState(null);

  useEffect(() => {
    setProductos(obtenerProductos());
    console.log("Valores recibidos en Ticket:");
    console.log("Dinero recibido:", dineroRecibido);
    console.log("Total precio:", totalPrecio);
    console.log("Fecha y hora actual:", currentDateTime);

    // Convertir dineroRecibido a un número decimal
    const dineroRecibidoNumeric = parseFloat(dineroRecibido);

    // Calcular el cambio y limitar a 2 decimales
    const cambioCalculado = (totalPrecio - dineroRecibidoNumeric).toFixed(2);

    // Convertir el cambio a valor absoluto
    const cambioAbsoluto = Math.abs(cambioCalculado);

    // Actualizar el estado del cambio
    setCambio(cambioAbsoluto);

    

    setProductos(obtenerProductos());
  }, []);

  const handleVolverAlInventario = () => {
    eliminarTodosLosProductos(); // Llamar a la función para eliminar todos los productos
    navigation.reset({
      index: 0,
      routes: [{ name: 'Inventario' }],
    });
  };

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
            keyExtractor={(item) => item.Nombre}
            renderItem={({ item, index }) => <ListFinal item={item} />}
            ItemSeparatorComponent={() => <View style={{ marginTop: 10 }}></View>}
          />
        </View>
        <View style={{ marginTop: '3%', marginLeft: '10%' }}>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>TOTAL</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '75%' }]}>{totalPrecio}</Text>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>RECIBIDO</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '75%' }]}>{dineroRecibido}</Text>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>CAMBIO</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '75%' }]}>{cambio !== null ? cambio : 'Calculando...'}</Text>
        </View>
        <View style={{ marginTop: '7%', marginLeft: '10%' }}>
          <TouchableOpacity style={ButtonsLogin}
            onPress={handleVolverAlInventario}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginLeft: '20%', marginTop: 10, }}>VOLVER AL INVENTARIO</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Ticket;
