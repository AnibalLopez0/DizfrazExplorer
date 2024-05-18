import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Subtitle2 } from './Styles'
import Icons from 'react-native-vector-icons/Ionicons';

const ListFinal = ({item}) => {

    const {id, nombre, precio, stock} = item
  return (
    <View>
      
      <View>
      <Icons name="eye" color={'red'} size={75} />
      </View>
        <View style={{marginTop:-65, marginLeft:90}}>
        <Text style={Subtitle2}>{nombre}</Text>
        <Text style={Subtitle2}>${precio}</Text>
        <Text style={Subtitle2}>{stock-1}</Text>
        </View>
      
    </View>
  )
}

export default ListFinal