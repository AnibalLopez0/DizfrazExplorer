import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {Background, ButtonsLogin, ButtonsLoginText, Input, SubtitleInput} from './Styles';
//style={{width: 800,height: 800,}} se me va olvidar



const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validaCampos = () => {
    
  }
  
  return (
    <SafeAreaView>
      <View>
        <ImageBackground 
        source={require('./Images/background.png')}
        style={Background}>
          <View style={{flex: 1,alignItems: 'center', marginTop:228}}>
          <View>
            <Text style={SubtitleInput}>USUARIO</Text>
            <TextInput style={Input} ></TextInput>
          </View>
          <View style={{marginTop:'3%'}}>
            <Text style={SubtitleInput}>CONTRASEÑA</Text>
            <TextInput style={Input} secureTextEntry={!showPassword}></TextInput>
            <TouchableOpacity style={{marginTop:-40, marginLeft:255}} onPress={togglePasswordVisibility}>
            <Icons name={showPassword ? "eye" : "eye-off"} color={"black"} size={40}/>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{flex: 1, alignItems:'center', marginTop:250}}>
            <TouchableOpacity style={ButtonsLogin}
            onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={ButtonsLoginText}>INICIAR SESION</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
              <Text 
              style={{fontSize: 16, 
              fontWeight:'bold', 
              textDecorationLine: 'underline', 
              color: '#F72798', 
              marginTop:30}}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}



export default Login;
