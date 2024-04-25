import { Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import {Background, ButtonsLogin, ButtonsLoginText, Input, SubtitleInput} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';


const Register = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const enviarDatos = () => {

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
              <TextInput style={Input}></TextInput>
            </View>
            <View style={{marginTop:15}}>
              <Text style={SubtitleInput}>
                CORREO
              </Text>
              <TextInput style={Input}></TextInput>
            </View>
            <View style={{marginTop:15, marginBottom:15}}>
              <Text style={SubtitleInput}>
                USUARIO
              </Text>
              <TextInput style={Input}></TextInput>
            </View>
            <View>
            <Text style={SubtitleInput}>CONTRASEÑA</Text>
            <TextInput style={Input} secureTextEntry={!showPassword}></TextInput>
            <TouchableOpacity style={{marginTop:-40, marginLeft:255}} onPress={togglePasswordVisibility}>
            <Icons name={showPassword ? "eye" : "eye-off"} color={"black"} size={40}/>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{flex: 1, alignItems:'center', marginTop:250}}>
            <TouchableOpacity style={ButtonsLogin}>
              <Text style={[ButtonsLoginText, {marginLeft:100}]}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
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
