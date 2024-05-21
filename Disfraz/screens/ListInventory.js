import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import {Buttons,ButtonsNormal,ButtonsNormal2,Input,Subtitle2} from './Styles';
import { useNavigation } from '@react-navigation/native';
const ListInventory = ({item}) => {

    const {id, nombre, precio, stock, PrecioPublico, Talla, imagen} = item

    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={{ flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F72798',
        width: '65%', // Ajustar el ancho según el número de columnas deseado
        aspectRatio: 1, }}
    onPress={() => navigation.navigate("DetalleProducto", { producto: item })}>
      
      <View style={{ marginLeft: '0%', marginTop: '3%' }}>
          {imagen ? (
            <Image source={{ uri: imagen }} style={{ width: 75, height: 75 }} />
          ) : (
            <Icons name="eye" color={'#B41C65'} size={75} />
          )}
        </View>


        <View style={{marginTop: 10,
    alignItems: 'center',}}>
        <Text style={Subtitle2}>{nombre}</Text>
        <Text style={Subtitle2}>${precio}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListInventory