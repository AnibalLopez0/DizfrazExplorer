import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './Product';
import Sell from './Sell';
import Ticket from './Ticket';
import ProductRegister from './ProductRegister';
import Edit from './Edit';
import Nav from './Navigation';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const StackProduct = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Inventario"
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Icons name="chevron-back-outline" size={30} color="#F72798" /> // Icono personalizado para retroceder
        ),
        headerTintColor: '#F72798', 
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
        headerStyle: {
          backgroundColor: '#000',

        },
      }}
    >
        <Stack.Screen name="Inventario" component={HomeScreen} 
        options={{
            headerShown:false
        }}/>
        <Stack.Screen name="DetalleProducto" component={Product} />
        <Stack.Screen name="Venta" component={Sell}/>
        <Stack.Screen name="Ticket" component={Ticket}/>
        <Stack.Screen name='Agregar Producto' component={ProductRegister}/>
        <Stack.Screen name='Editar' component={Edit}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackProduct