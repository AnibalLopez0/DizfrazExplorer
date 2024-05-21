import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { Background, ButtonsLogin, ButtonsLoginText, Input, SubtitleInput, SubtitleInput2 } from './Styles';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://snek22.000webhostapp.com/login.php', {
        username,
        password
      });

      // Handle successful login
      if (response.data.status === 'success') {
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Hubo un error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./Images/background.png')}
        style={Background}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
          <View style={{ alignItems: 'center', width: '80%' }}>
            <Text style={SubtitleInput2}>USUARIO</Text>
            <TextInput
              style={[Input, { textAlign: 'center' }]} // Centrar el texto dentro del TextInput
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          <View style={{ marginTop: '3%', alignItems: 'center', width: '75%' }}>
            <Text style={SubtitleInput2}>CONTRASEÑA</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', position: 'relative' }}>
              <TextInput
                style={[Input, { textAlign: 'center', flex: 1 }]} // Centrar el texto dentro del TextInput
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity style={{ position: 'absolute', right: 15, top: 17 }} onPress={togglePasswordVisibility}>
                <Icons name={showPassword ? "eye" : "eye-off"} color={"black"} size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -340 }}>
          <TouchableOpacity style={ButtonsLogin} onPress={handleLogin}>
            <Text style={ButtonsLoginText}>INICIAR SESION</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline', color: '#F72798', marginTop: 30 }}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Login;
