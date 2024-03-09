import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Graph from './screens/Graph';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icons name="home" color={'black'} size={40} />
          ),
        }}/>
        <Tab.Screen name="Graph" component={Graph} 
        options={{


        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

