import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListInventory from './ListInventory';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Background } from './Styles'; // Asegúrate de importar los estilos necesarios

const Inventory = () => {
  const [productos, setProductos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
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

    obtenerProductos();
  }, []); // Llama a obtenerProductos solo una vez al cargar el componente

  return (
    <SafeAreaView>
      <ImageBackground source={require('./Images/background.png')} style={Background}>
        <TouchableOpacity style={{ marginLeft: '80%', marginTop: '3%' }} onPress={() => navigation.navigate("Agregar Producto")}>
          <Icons name="add-circle" color={'#F72798'} size={50} />
        </TouchableOpacity>

        <View style={{ height: '80%', marginTop: '5%', marginLeft: '2%' }}>
        <FlatList
          numColumns={2} 
          data={productos}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({item, index}) => <ListInventory item={item}/>}
          ItemSeparatorComponent={() => <View style={{marginTop:10}}></View>}            
        />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Inventory;
