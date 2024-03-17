import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import Graph from './screens/Graph';
import Inventory from './screens/Inventory';
import Register from './screens/Register';
import ProductRegister from './screens/ProductRegister';


const HomeStackNavigator = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: "#B41C65",
          tabBarActiveBackgroundColor: "#000",
          tabBarInactiveTintColor: "#B41C65",
          tabBarInactiveBackgroundColor: "#FB8DC8",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icons name="cart" color={'#B41C65'} size={40} />
          ),
          headerStyle:{
            backgroundColor: '#000',
          },
          headerTintColor: '#B41C65',
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Tab.Screen name="Grafica" component={Graph} 
        options={{
          tabBarLabel: 'Gráfica',
          tabBarIcon: ({color, size}) => (
            <Icons name="bar-chart" color={"#B41C65"} size={40}></Icons>
          ), 
          headerStyle:{
            backgroundColor: '#000',
          },
          headerTintColor: '#B41C65',
          headerTitleAlign: "center"
        }}/>
        <Tab.Screen name="Registro" component={Register} 
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({color, size}) => (
            <Icons name="people-sharp" color={"#B41C65"} size={40}></Icons>
          ),
          headerStyle:{
            backgroundColor: '#000',
          },
          headerTintColor: '#B41C65',
          headerTitleAlign: "center"
        }}/>
        <Tab.Screen name="Inventario" component={Inventory} 
        options={{
          tabBarLabel: 'Inventario',
          tabBarIcon: ({color, size}) => (
            <Icons name="search" color={"#B41C65"} size={40}></Icons>
          ),
          headerStyle:{
            backgroundColor: '#000',
          },
          headerTintColor: '#B41C65',
          headerTitleAlign: "center"
        }}/>
        <Tab.Screen name="Agregar Producto" component={ProductRegister} 
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({color, size}) => (
            <Icons name="add" color={"#B41C65"} size={40}></Icons>
          ),
          headerStyle:{
            backgroundColor: '#000',
          },
          headerTintColor: '#B41C65',
          headerTitleAlign: "center",
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

