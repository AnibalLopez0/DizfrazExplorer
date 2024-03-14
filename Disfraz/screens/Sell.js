import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, 
FlatList} from 'react-native';
import {Buttons,ButtonsNormal,ButtonsNormal2,Input,Subtitle2} from './Styles';
import ListProductHS from './ListProductHS';

const Sell = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const time = `${now.getHours()}:${now.getMinutes()}`;
      setCurrentDateTime(`${date} ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  

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
  const totalPrecio = productos.reduce((total, producto) => total + producto.precio, 0);
  const [dineroRecibido, setDineroRecibido] = useState('');

  return (
    <SafeAreaView>
      <ImageBackground
      source={require('./Images/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{marginTop:'10%', marginLeft:'5%'}}>
        <Text style={Subtitle2}> NUMERO DE COMPRA</Text>
        <Text style={[Subtitle2, {marginTop:-20, marginLeft:'60%'}]}> {currentDateTime}</Text>
      </View>

      <View style={{height:'50%', marginTop:'5%', marginLeft:'2%'}}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.Nombre}
        renderItem={({item, index})=> <ListProductHS item={item}/>}
        ItemSeparatorComponent={()=> <View style={{marginTop:10}}></View>}
      />
      </View>
      <View style={{marginTop:'3%', marginLeft:'10%'}}>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>TOTAL</Text>
        
        <Text style={[Subtitle2, {marginTop:-23, marginLeft:'72%'}]}>${totalPrecio}</Text>
        <TextInput placeholder='DINERO RECIBIDO' 
  placeholderTextColor={'#000000'}
  keyboardType="numeric" value={dineroRecibido}
  onChangeText={setDineroRecibido} style={Input}></TextInput>
      </View>
      <View style={{marginTop: '7%', marginLeft:'10%'}}>
      <TouchableOpacity style={ButtonsNormal}>
              <Text style={Buttons}>CANCELAR</Text>
            </TouchableOpacity>
        <TouchableOpacity style={[ButtonsNormal2, {marginTop: '-10%', marginLeft:'55%'}]}>
              <Text style={Buttons}>VENDER</Text>
         </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Sell