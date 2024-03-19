import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { ButtonsLogin, Input, Subtitle } from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import ListProductHS from './ListProductHS';
import axios from 'axios'; // Paso 1: Importar axios

function HomeScreen() {

  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [productos, setProductos] = useState([]);

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

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('./Images/background.png')}
          style={{ width: 1000, height: 1000 }}>
          <View style={{ marginLeft: '6%', marginTop: '2%' }}>
            <TextInput
              placeholder='BUSCAR'
              placeholderTextColor={'#000000'}
              style={Input}
              onChangeText={text => setSearchTerm(text)}
              value={searchTerm}
            />
            <TouchableOpacity onPress={toggleVisibility} style={{ marginTop: '-3.5%', marginLeft: '27%' }}>
              <Icons name="search" color={'black'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: '-3.5%', marginLeft: '-4%', backgroundColor: '#FB8DC8', borderRadius: 10, width: 31 }}>
              <Icons name="camera" color={'black'} size={30} />
            </TouchableOpacity>
          </View>
          {isVisible && (
            <View style={{ height: '60%', marginTop: '5%', marginLeft: '2%' }}>
              <Text style={[Subtitle, { marginBottom: '2%', }]}>RESULTADOS DE LA BUSQUEDA</Text>
              <FlatList
                data={productos.filter(item => item.nombre.toLowerCase().includes(searchTerm.toLowerCase()))}
                keyExtractor={(item) => item.nombre}
                renderItem={({ item, index }) => <ListProductHS item={item} />}
                ItemSeparatorComponent={() => <View style={{ marginTop: 10 }}></View>}
              />
            </View>
          )}

        </ImageBackground>
      </View>

    </SafeAreaView>
  );
}

export default HomeScreen;
