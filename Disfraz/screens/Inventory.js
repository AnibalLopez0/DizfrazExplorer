import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListInventory from './ListInventory';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Background, Subtitle } from './Styles'; // Asegúrate de importar los estilos necesarios

const Inventory = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos(); // Llama a obtenerProductos una vez al cargar el componente
    const interval = setInterval(obtenerProductos, 20 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  const obtenerProductos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://snek22.000webhostapp.com/productos.php');
      if (response.status === 200) {
        setProductos(response.data);
      } else {
        console.error('Error al obtener productos');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require('./Images/background.png')} style={Background}>

      <TouchableOpacity style={{ marginLeft: '5%', marginTop: '3.5%' }} onPress={obtenerProductos}>
          <Icons name="refresh-circle" color={'#F72798'} size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: '80%', marginTop: '-13.5%' }} onPress={() => navigation.navigate("Agregar Producto")}>
          <Icons name="add-circle" color={'#F72798'} size={50} />
        </TouchableOpacity>

        

        <View style={{ height: '80%', marginTop: '3%', marginLeft: '5%'}}>
          {loading ? (
            <Text style={Subtitle}>Cargando...</Text>
          ) : (
            <FlatList
              numColumns={2} 
              data={productos}
              keyExtractor={(item, index) => index.toString()} 
              renderItem={({item, index}) => <ListInventory item={item}/>}
              ItemSeparatorComponent={() => <View style={{marginTop:10}}></View>}            
            />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Inventory;
