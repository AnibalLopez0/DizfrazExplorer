import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListInventory from './ListInventory'
import Icons from 'react-native-vector-icons/Ionicons';
import {Background, Buttons,ButtonsNormal,ButtonsNormal2,Input,Subtitle2} from './Styles';

const Inventory = () => {
    const productos = [
        {
          Nombre: "Gafas",
          precio: 10,
          cantidad: 1,
        },
        {
          Nombre: "PELUCA",
          precio: 20,
          cantidad: 10,
        },
        {
          Nombre: "Nariz de payaso",
          precio: 100,
          cantidad: 10,
        },
        {
          Nombre: "Disfraz de batman",
          precio: 1000,
          cantidad: 1,
        },
        {
          Nombre: "Disfraz de payaso",
          precio: 40,
          cantidad: 50,
        },
    
      ]
  return (
    <SafeAreaView>
        <ImageBackground source={require('./Images/background.png')} style={Background}>
        <TouchableOpacity style={{marginLeft:'80%', marginTop:'3%'}}>
        <Icons name="add-circle" color={'#F72798'} size={50} />
        </TouchableOpacity>
        <Text>INVENTARIO</Text>
        <View style={{height:'80%', marginTop:'5%', marginLeft:'2%'}}>
          <FlatList
          numColumns={2} 
            data={productos}
            keyExtractor={(item) => item.Nombre}
            renderItem={({item, index})=> <ListInventory item={item}/>}
            ItemSeparatorComponent={()=> <View style={{marginTop:10}}></View>}            
          />
      </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default Inventory