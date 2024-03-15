import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import {ButtonsLogin, Input,Subtitle} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import ListProductHS from './ListProductHS';

function HomeScreen() {

  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
      <View>
        <ImageBackground
        source={require('./Images/background.png')}
        style={{width: 1000, height: 1000}}>
        <View style={{marginLeft:'6%', marginTop:'2%'}}>
        <TextInput 
          placeholder='BUSCAR' 
          placeholderTextColor={'#000000'} 
          style={Input}
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
        <TouchableOpacity onPress={toggleVisibility} style={{marginTop:'-3.5%', marginLeft:'27%'}}>
        <Icons name="search" color={'black'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:'-3.5%', marginLeft:'-4%', backgroundColor:'#FB8DC8', borderRadius:10, width:31}}>
        <Icons name="camera" color={'black'} size={30} />
        </TouchableOpacity>
        </View>
        {isVisible && (
        <View style={{height:'60%', marginTop:'5%', marginLeft:'2%'}}>
          <Text style={[Subtitle, {marginBottom: '2%',}]}>RESULTADOS DE LA BUSQUEDAS</Text>
          <FlatList
            data={productos.filter(item => item.Nombre.toLowerCase().includes(searchTerm.toLowerCase()))}
            keyExtractor={(item) => item.Nombre}
            renderItem={({item, index})=> <ListProductHS item={item}/>}
            ItemSeparatorComponent={()=> <View style={{marginTop:10}}></View>}
          />
        </View>
      )}
      
        </ImageBackground>
      </View>
      
    </SafeAreaView>
  );
}

export default HomeScreen;
