import { Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import {Background, ButtonsLogin, ButtonsLoginText, Input, SubtitleInput} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Register = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [cargo, setCargo] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const enviarDatos = async () => {
    try{
      const url = "https://snek22.000webhostapp.com/insertarusuario.php";

      const empleado = 
      {
        nombre: nombre,
        cargo: cargo,
        correo: correo,
        password: password,
      }
      const response = await axios.post(url, { empleados: [empleado] });

      console.log('Empleado reagistrado correctamente:', response.data);
      alert(nombre +' agregado correctamente');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })

    } catch(error){
      console.error('Error al enviar los datos:', error, nombre, correo, cargo, password);
      alert('Error al registrar empleado');
    }
  }

  const camposVacios =  () => {
    if(!nombre || !correo || !cargo || !password){
      alert("Por favor completa todos los campos");
      return false;
    }
    return true;
  }

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
        source={require('./Images/background.png')}
        style={Background}>
          <View style={{flex: 1,alignItems: 'center', marginTop:100}}>
            <View>
              <Text style={SubtitleInput}>
                NOMBRE
              </Text>
              <TextInput style={Input}
              value={nombre}
              onChangeText={setNombre}></TextInput>
            </View>
            <View style={{marginTop:15}}>
              <Text style={SubtitleInput}>
                CORREO
              </Text>
              <TextInput style={Input}
              value={correo}
              onChangeText={setCorreo}></TextInput>
            </View>
            <View style={{marginTop:15, marginBottom:15}}>
              <Text style={SubtitleInput}>
                CARGO
              </Text>
              <TextInput style={Input}
              value={cargo}
              onChangeText={setCargo}></TextInput>
            </View>
            <View>
            <Text style={SubtitleInput}>CONTRASEÑA</Text>
            <TextInput style={Input} secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}></TextInput>
            <TouchableOpacity style={{marginTop:-40, marginLeft:255}} onPress={togglePasswordVisibility}>
            <Icons name={showPassword ? "eye" : "eye-off"} color={"black"} size={40}/>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{flex: 1, alignItems:'center', marginTop:250}}>
            <TouchableOpacity style={ButtonsLogin}
            onPress={() => {
              if (camposVacios()) {
                enviarDatos();
              }
            }}>
              <Text style={[ButtonsLoginText, {marginLeft:100}]}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            >
              <Text 
              style={{fontSize: 16, 
              fontWeight:'bold', 
              textDecorationLine: 'underline', 
              color: '#F72798', 
              marginTop:30}}>ATRAS</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default Register;
