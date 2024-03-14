import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Subtitle2 } from './Styles'
import Icons from 'react-native-vector-icons/Ionicons';

const ListProductHS = ({item}) => {

    const {Nombre, precio, cantidad} = item
  return (
    <View>
      <TouchableOpacity >
      <View>
      <Icons name="eye" color={'red'} size={75} />
      </View>
        <View style={{marginTop:-65, marginLeft:90}}>
        <Text style={Subtitle2}>{Nombre}</Text>
        <Text style={Subtitle2}>{precio}</Text>
        <Text style={Subtitle2}>{cantidad}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListProductHS