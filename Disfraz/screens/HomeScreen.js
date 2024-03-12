import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Background} from './Styles';

function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
        source={require('./Images/background.png')}
        style={{width: 1000, height: 1000}}>
        <TouchableOpacity>
          <View style={{
          width:325, 
          height: 50, 
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 80,
          marginLeft: 35}}>
          <TextInput
          style={{color: 'black',
          fontSize: 30,
          marginLeft: 10}}
          placeholder='Buscar'></TextInput>
          <Image source={require('./Images/Black lens.png')}
          style={{width: 40, 
          height: 40,
          marginLeft: 270,
          marginTop: -38}}></Image>
        </View>
        </TouchableOpacity>
        <Text style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          marginLeft: 20,
          marginTop: 15
        }}>RESULTADOS DE LA BUSQUEDA</Text>
        <View
        style={{
          width: 350,
          height: 100,
          marginLeft: 20,
          marginTop: 20,
        }}>
          <Image source={require('./Images/Pink Eye.png')}
          style={{
            width: 80,
            height: 80
          }}></Image>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: -80
          }}>NOMBRE DEL PRODUCTO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 5 }}>PRECIO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 10}}>CANTIDAD</Text>
        </View>
        <View
        style={{
          width: 350,
          height: 100,
          marginLeft: 20,
          marginTop: 20,
        }}>
          <Image source={require('./Images/Pink Eye.png')}
          style={{
            width: 80,
            height: 80
          }}></Image>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: -80
          }}>NOMBRE DEL PRODUCTO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 5 }}>PRECIO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 10}}>CANTIDAD</Text>
        </View>
        <View
        style={{
          width: 350,
          height: 100,
          marginLeft: 20,
          marginTop: 20,
        }}>
          <Image source={require('./Images/Pink Eye.png')}
          style={{
            width: 80,
            height: 80
          }}></Image>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: -80
          }}>NOMBRE DEL PRODUCTO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 5 }}>PRECIO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 10}}>CANTIDAD</Text>
        </View>
        <View
        style={{
          width: 350,
          height: 100,
          marginLeft: 20,
          marginTop: 20,
        }}>
          <Image source={require('./Images/Pink Eye.png')}
          style={{
            width: 80,
            height: 80
          }}></Image>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: -80
          }}>NOMBRE DEL PRODUCTO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 5 }}>PRECIO</Text>
          <Text style={{
            color: 'white',
            fontSize: 20,
            marginLeft: 90,
            marginTop: 10}}>CANTIDAD</Text>
        </View>
        </ImageBackground>
      </View>
      
    </SafeAreaView>
  );
}

export default HomeScreen;
