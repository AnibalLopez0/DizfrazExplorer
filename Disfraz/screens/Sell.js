import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Buttons, ButtonsNormal, ButtonsNormal2, Input, Subtitle2 } from './Styles';
import { useNavigation } from '@react-navigation/native';
import ListProductTicket from './ListProductTicket';
import { obtenerProductos, sumarPreciosProductos, eliminarProductoPorId } from './ListProduct'; // Asegúrate de importar todas las funciones necesarias

const Sell = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [productos, setProductos] = useState([]);
  const [dineroRecibido, setDineroRecibido] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setProductos(obtenerProductos());

    const interval = setInterval(() => {
      const now = new Date();
      const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const time = `${now.getHours()}:${now.getMinutes()}`;
      setCurrentDateTime(`${date} ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEliminarProducto = (id) => {
    eliminarProductoPorId(id);
    setProductos(obtenerProductos()); // Actualiza la lista de productos después de eliminar uno
  };

  const totalPrecio = sumarPreciosProductos(productos);

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
            keyExtractor={(item) => item.nombre}
            renderItem={({ item }) => <ListProductTicket item={item} onEliminarProducto={handleEliminarProducto} />}
            ItemSeparatorComponent={() => <View style={{ marginTop: 10 }}></View>}
          />
        </View>
        <View style={{ marginTop: '3%', marginLeft: '10%' }}>
          <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>TOTAL</Text>
          <Text style={[Subtitle2, { marginTop: -23, marginLeft: '72%' }]}>${totalPrecio}</Text>
          <TextInput
            placeholder='DINERO RECIBIDO'
            placeholderTextColor={'#000000'}
            keyboardType="numeric"
            value={dineroRecibido}
            onChangeText={setDineroRecibido}
            style={Input}
          />
        </View>
        <View style={{ marginTop: '7%', marginLeft: '10%' }}>
          <TouchableOpacity
            style={ButtonsNormal}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Inventario' }],
            })}>
            <Text style={[Buttons, { marginLeft: '7%' }]}>CANCELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ButtonsNormal2, { marginTop: '-10%', marginLeft: '55%' }]}
            onPress={() => navigation.navigate("Ticket", { dineroRecibido, totalPrecio, currentDateTime })}>
            <Text style={[Buttons, { marginLeft: '20%' }]}>VENDER</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Sell;
