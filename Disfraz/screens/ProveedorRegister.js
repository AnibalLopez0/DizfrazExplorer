import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, Image, TouchableOpacity,
ScrollView } from 'react-native';
import {Subtitle2, Input, ButtonsNormal, ButtonsNormal2, Buttons} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const ProveedorRegister = () =>  {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const enviarDatos = async () => {
        try{
            const url = "https://snek22.000webhostapp.com/insertarproveedor.php";
            const proveedor = 
            {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                ubicacion: ubicacion
            }
            const response = await axios.post(url, { proveedores: [proveedor] });

            console.log('Proveedor reagistrado correctamente:', response.data);
            alert(nombre +' agregado correctamente');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Inventory' }],
            })

        }catch(error){
            console.error('Error al enviar los datos:', error, nombre, correo, telefono, ubicacion);
            alert('Error al registrar empleado');
        }
    };

    const camposVacios = () => {
        if(!nombre || !telefono || !correo || !ubicacion){
            alert("Porfavor completa todos los campos");
            return false;
        }
        return true;
    }

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
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder='Nombre del proveedor'></TextInput>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        CORREO</Text>
                    <TextInput style={Input}
                    value={correo}
                    onChangeText={setCorreo}
                    placeholder='Correo'></TextInput>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        TELEFONO</Text>
                    <TextInput style={Input}
                    value={telefono}
                    onChangeText={setTelefono}
                    placeholder='Telefono'></TextInput>
                    <Text style={[Subtitle2, {marginTop:20, marginLeft:10}]}>
                        UBICACION</Text>
                    <TextInput style={Input}
                    value={ubicacion}
                    onChangeText={setUbicacion}
                    placeholder='Ubicacion'></TextInput>
                </View>
                <View style={{marginTop: '5%'}}>
                <TouchableOpacity style={[ButtonsNormal, {marginLeft: 25,}]}>
                    <Text style={Buttons}>CANCELAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ButtonsNormal2, {marginTop:-35, marginLeft:225}]}
                    onPress={() => {
                        if (camposVacios()) {
                          enviarDatos();
                        }
                      }}>
                    <Text style={Buttons}>TERMINAR</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ProveedorRegister;