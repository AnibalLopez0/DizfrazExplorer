import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import {Buttons,ButtonsNormal,ButtonsNormal2,Input,Subtitle2} from './Styles';
import { useNavigation } from '@react-navigation/native';
const ListInventory = ({item}) => {

    const {nombre, precio, stock, PrecioPublico, Talla, descripcion, categoria, id_producto} = item

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
      <View >
      <Icons name="eye" color={'#F72798'} size={75} />
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