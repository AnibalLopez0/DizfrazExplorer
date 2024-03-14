import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import {Buttons,ButtonsNormal,ButtonsNormal2,Input,Subtitle2} from './Styles';
const ListInventory = ({item}) => {

    const {Nombre, precio} = item
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
    aspectRatio: 1, }}>
      <View >
      <Icons name="eye" color={'#F72798'} size={75} />
      </View>
        <View style={{marginTop: 10,
    alignItems: 'center',}}>
        <Text style={Subtitle2}>{Nombre}</Text>
        <Text style={Subtitle2}>{precio}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListInventory