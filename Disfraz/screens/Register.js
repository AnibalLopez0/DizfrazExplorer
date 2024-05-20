import { Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import {Background, ButtonsLogin, ButtonsLoginText, Input, SubtitleInput} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [cargo, setCargo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const enviarDatos = async () => {
    try {
      const url = "https://snek22.000webhostapp.com/insertarusuario.php";

      const empleado = {
        nombre: nombre,
        correo: correo,
        cargo: cargo,
        username: username,
        password: password,
      };

      console.log('Datos a enviar:', empleado); // Registro de datos antes de enviarlos

      const response = await axios.post(url, empleado);

      if (response.data.message && response.data.message.includes("Usuario y empleado registrados correctamente")) {
        console.log('Empleado registrado correctamente:', response.data);
        Alert.alert('Éxito', nombre + ' agregado correctamente');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        console.error('Error en la respuesta del servidor:', response.data);
        Alert.alert('Error', 'Error al registrar empleado');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Alert.alert('Error', 'Error al registrar empleado');
    }
  };

  const camposVacios = () => {
    if (!nombre || !correo || !cargo || !username || !password) {
      Alert.alert('Error', "Por favor completa todos los campos");
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('./Images/background.png')}
          style={Background}
        >
          <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
            <View>
              <Text style={SubtitleInput}>
                NOMBRE
              </Text>
              <TextInput
                style={Input}
                value={nombre}
                onChangeText={setNombre}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={SubtitleInput}>
                CORREO
              </Text>
              <TextInput
                style={Input}
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
              />
            </View>
            <View style={{ marginTop: 15}}>
              <Text style={SubtitleInput}>
                CARGO
              </Text>
              <TextInput
                style={Input}
                value={cargo}
                onChangeText={setCargo}
              />
            </View>
            <View style={{ marginTop: 15}}>
              <Text style={SubtitleInput}>
                NOMBRE DE USUARIO
              </Text>
              <TextInput
                style={Input}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <Text style={SubtitleInput}>CONTRASEÑA</Text>
              <TextInput
                style={Input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={{ marginTop: -40, marginLeft: 255 }}
                onPress={togglePasswordVisibility}
              >
                <Icons name={showPassword ? "eye" : "eye-off"} color={"black"} size={40} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 350 }}>
            <TouchableOpacity
              style={ButtonsLogin}
              onPress={() => {
                if (camposVacios()) {
                  enviarDatos();
                }
              }}
            >
              <Text style={[ButtonsLoginText, { marginLeft: 100 }]}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  color: '#F72798',
                  marginTop: 30
                }}
              >
                ATRAS
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Register;
