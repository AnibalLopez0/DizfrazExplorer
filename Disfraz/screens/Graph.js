import React, { Component } from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {Background, Subtitle2, Title2, } from './Styles';

function Graph() {
  return (
    <SafeAreaView>
        <View>
            <ImageBackground source={require('./Images/background.png')} 
            style={Background}>
                <Icons name="analytics-sharp" color={'red'} size={350} />
                <View>
                    <Text style={[Title2, {marginLeft:10}]}>PRODUCTO</Text>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>VALOR DEL PRODUCTO</Text>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>INGRESOS EN DETERMINADO TIEMPO</Text>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>GANANCIAS</Text>
                </View>
            </ImageBackground>
        </View>
    </SafeAreaView>
  );
}

export default Graph;
