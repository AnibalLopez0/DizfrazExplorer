import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView, 
FlatList} from 'react-native';
import {ButtonsLogin,ButtonsLoginText,Subtitle2} from './Styles';
import ListProductHS from './ListProductHS';


function Ticket(){
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

  return(
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
        <Text style={[Subtitle2, {marginTop:-23, marginLeft:'75%'}]}>$$$</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>RECIBIDO</Text>
        <Text style={[Subtitle2, {marginTop:-23, marginLeft:'75%'}]}>$$$</Text>
        <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>CAMBIO</Text>
        <Text style={[Subtitle2, {marginTop:-23, marginLeft:'75%'}]}>$$$</Text>
      </View>
      <View style={{marginTop: '7%', marginLeft:'10%'}}>
      <TouchableOpacity style={ButtonsLogin}>
              <Text style={{fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: '10%',
    marginTop: 10,}}>VOLVER A LA PAGINA PRINCIPAL</Text>
            </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Ticket;