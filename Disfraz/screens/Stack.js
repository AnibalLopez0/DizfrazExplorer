import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import HomeScreen from './Navigation';

export default class Stack extends Component {
  render() {

    const Stack= createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} 
          options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="Register" component={Register} 
          options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}