import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Buttons, ButtonsNormal, ButtonsNormal2, Input, Subtitle2 } from './Styles';
import { useNavigation } from '@react-navigation/native';
import ListProductTicket from './ListProductTicket';
import { obtenerProductos, sumarPreciosProductos, eliminarProductoPorId } from './ListProduct';
import axios from 'axios';

const Sell = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [productos, setProductos] = useState([]);
  const [dineroRecibido, setDineroRecibido] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setProductos(obtenerProductos().map(producto => ({ ...producto, cantidad: producto.cantidad || 1 })));

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
    setProductos(obtenerProductos().map(producto => ({ ...producto, cantidad: producto.cantidad || 1 })));
  };

  const totalPrecio = sumarPreciosProductos(productos);

  const handleVender = async () => {
    try {
      const venta = {
        productos: productos.map(p => ({ id_producto: p.id, cantidad: p.cantidad, precio: p.precio })),
        nombre_empleado: 'holis',
        total: totalPrecio,
        fecha: currentDateTime,
      };

      const response = await axios.post('https://snek22.000webhostapp.com/registrarventa.php', venta);

      if (response.status === 200) {
        console.log("Venta registrada exitosamente:", response.data);
        navigation.navigate("Ticket", { dineroRecibido, totalPrecio, currentDateTime });
      } else {
        console.error("Error al registrar la venta:", response.data);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./Images/background.png')}
        style={{ flex: 1 }}>
          <View style={{ marginTop: '10%', marginLeft: '5%' }}>
                <Text style={Subtitle2}>                  </Text>
                <Text style={[Subtitle2, { marginTop: -20, marginLeft: '60%' }]}> {currentDateTime}</Text>
              </View>
       
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListProductTicket item={item} onEliminarProducto={handleEliminarProducto} />
          )}
          ItemSeparatorComponent={() => <View style={{ marginTop: 10 }}></View>}
          
        />
        <View>
              
              <View style={{ marginTop: '-45%', marginLeft: '10%' }}>
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
                onPress={handleVender}>
                <Text style={[Buttons, { marginLeft: '20%' }]}>VENDER</Text>
              </TouchableOpacity>
            </View>
            </View>
           
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Sell;
