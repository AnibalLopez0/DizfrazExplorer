import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { Background, ButtonsLogin, ButtonsLoginText, Input, SubtitleInput } from './Styles';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-api-url/login.php', {
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
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require('./Images/background.png')}
          style={Background}>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 228 }}>
            <View>
              <Text style={SubtitleInput}>USUARIO</Text>
              <TextInput
                style={Input}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={{ marginTop: '3%' }}>
              <Text style={SubtitleInput}>CONTRASEÑA</Text>
              <TextInput
                style={Input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={{ marginTop: -40, marginLeft: 255 }} onPress={togglePasswordVisibility}>
                <Icons name={showPassword ? "eye" : "eye-off"} color={"black"} size={40} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 250 }}>
            <TouchableOpacity style={ButtonsLogin} onPress={handleLogin}>
              <Text style={ButtonsLoginText}>INICIAR SESION</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline', color: '#F72798', marginTop: 30 }}>REGISTRARSE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default Login;
