import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Home } from '@screens/Home';
import { Settings } from '@screens/Settings';
import { Favorites } from '@screens/Favorites';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="images-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
