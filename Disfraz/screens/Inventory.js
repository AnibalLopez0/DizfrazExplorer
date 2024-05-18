import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListInventory from './ListInventory';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as RNFS from 'react-native-fs';
import { Alert, Button } from 'react-native';

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
    } finally {
      setLoading(false);
    }
  };

  const generarPDF = async () => {
    try {
      const htmlContent = `
        <html>
          <body>
            <h1>Inventario</h1>
            <table border="1">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                ${productos.map((producto) => `
                  <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `;
  
      const options = {
        html: htmlContent,
        fileName: 'inventory',
        directory: Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.ExternalDirectoryPath,
      };
  
      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('PDF generado', `El inventario se ha descargado en la carpeta de documentos.`);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      Alert.alert('Error', 'No se pudo generar el PDF del inventario.');
    }
  };
  

  return (
    <SafeAreaView>
      <ImageBackground source={require('./Images/background.png')} style={Background}>
        
        <TouchableOpacity style={{ marginLeft: '80%', marginTop: '3%' }} onPress={() => navigation.navigate("Agregar Producto")}>
          <Icons name="add-circle" color={'#F72798'} size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={[ButtonsNormal, { marginLeft: '36%', marginTop:'-11%' }]} onPress={generarPDF}>
  <Text style={[Buttons, {marginLeft:'33%'}]}> PDF</Text>
</TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: '5%', marginTop: '-10%', width:'20%' }} onPress={obtenerProductos}>
          <Icons name="refresh-circle" color={'#F72798'} size={50} />
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
