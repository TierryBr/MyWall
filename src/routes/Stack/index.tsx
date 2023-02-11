import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Details } from '@screens/Details';
import { Settings } from '@screens/Settings';
import { Favorites } from '@screens/Favorites';
import { Home } from '@screens/Home';

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
