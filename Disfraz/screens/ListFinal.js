import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Subtitle2 } from './Styles'
import Icons from 'react-native-vector-icons/Ionicons';

const ListFinal = ({item}) => {

    const {id, nombre, precio, stock, imagen} = item
  return (
    <View>
      
      <View style={{ marginLeft: '0%', marginTop: '3%' }}>
        {imagen ? (
          <Image source={{ uri: imagen }} style={{ width: 75, height: 75 }} />
        ) : (
          <Icons name="eye" color={'#B41C65'} size={75} />
        )}
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