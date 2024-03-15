import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import Graph from './screens/Graph';
import Inventory from './screens/Inventory';
import Register from './screens/Register';
import ProductRegister from './screens/ProductRegister';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#B41C65",
          activeBackgroundColor: "#FFF",
          inactiveTintColor: "#B41C65",
          inactiveBackgroundColor: "#FB8DC8",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icons name="cart" color={'#B41C65'} size={40} />
          ),
        }}/>
        <Tab.Screen name="Grafica" component={Graph} 
        options={{
          tabBarLabel: 'Gráfica',
          tabBarIcon: ({color, size}) => (
            <Icons name="bar-chart" color={"#B41C65"} size={40}></Icons>
          )
        }}/>
        <Tab.Screen name="Registro" component={Register} 
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({color, size}) => (
            <Icons name="people-sharp" color={"#B41C65"} size={40}></Icons>
          )
        }}/>
        <Tab.Screen name="Inventario" component={Inventory} 
        options={{
          tabBarLabel: 'Inventario',
          tabBarIcon: ({color, size}) => (
            <Icons name="search" color={"#B41C65"} size={40}></Icons>
          )
        }}/>
        <Tab.Screen name="Agregar Producto" component={ProductRegister} 
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({color, size}) => (
            <Icons name="add" color={"#B41C65"} size={40}></Icons>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

