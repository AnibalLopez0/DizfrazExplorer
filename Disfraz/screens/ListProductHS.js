import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Subtitle2 } from './Styles'
import Icons from 'react-native-vector-icons/Ionicons';

const ListProductHS = ({item}) => {

  const {id, nombre, precio, stock, PrecioPublico, Talla} = item

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("DetalleProducto", { producto: item })}>
      <View>
      <Icons name="eye" color={'red'} size={75} />
      </View>
        <View style={{marginTop:-65, marginLeft:90}}>
        <Text style={Subtitle2}>{nombre}</Text>
        <Text style={Subtitle2}>${precio}</Text>
        <Text style={Subtitle2}>{stock}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListProductHS