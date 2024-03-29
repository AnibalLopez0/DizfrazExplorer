import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Subtitle2 } from './Styles'
import Icons from 'react-native-vector-icons/Ionicons';

const ListProductHS = ({item}) => {

    const {nombre, precio, stock} = item
  return (
    <View>
      <TouchableOpacity >
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