import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Subtitle2 } from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';

const ListProductTicket = ({ item, onEliminarProducto }) => {
  const { id, nombre, precio, stock } = item;

  const handleEliminarProducto = () => {
    console.log("ID del producto a eliminar:", id);
    onEliminarProducto(id); // Llama a la función pasada como prop para eliminar el producto
  };

  return (
    <View>
      <View>
        <Icons name="eye" color={'red'} size={75} />
      </View>
      <View style={{ marginTop: -65, marginLeft: 90 }}>
        <Text style={Subtitle2}>{nombre}</Text>
        <Text style={Subtitle2}>${precio}</Text>
        <Text style={Subtitle2}>{stock}</Text>
      </View>
      <TouchableOpacity onPress={handleEliminarProducto}>
        <View style={{ position: 'absolute', top: '50%', right: 0, marginTop: -45, marginRight: 15 }}>
          <Icons name="close" color={'red'} size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ListProductTicket;
