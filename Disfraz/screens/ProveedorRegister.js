import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';

const ProveedorRegister = () =>  {
    return(
        <SafeAreaView>
            <ImageBackground
            source={require('./Images/background.png')}
            style={{width: '100%', height: '100%'}}>
                <View style={{marginLeft: '25%', marginTop: '3%'}}>
                    <Icons name="people-sharp" color={'#B41C65'} size={200} />
                </View>
                <View>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        NOMBRE DEL PROVEEDOR</Text>
                    <TextInput style={Input}
                    placeholder='Nombre del proveedor'></TextInput>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        CORREO</Text>
                    <TextInput style={Input}
                    placeholder='Correo'></TextInput>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        TELEFONO</Text>
                    <TextInput style={Input}
                    placeholder='Telefono'></TextInput>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        UBICACION</Text>
                    <TextInput style={Input}
                    placeholder='Ubicacion'></TextInput>
                </View>
                <View style={{marginTop: '5%'}}>
                <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}>
                    <Text style={Buttons}>CANCELAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}>
                    <Text style={Buttons}>TERMINAR</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ProveedorRegister;