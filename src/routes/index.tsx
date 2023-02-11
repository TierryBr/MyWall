import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Home } from '@screens/Home';
import { Settings } from '@screens/Settings';
import { Favorites } from '@screens/Favorites';
import StackRoute from './Stack';

const Tab = createBottomTabNavigator();

export function Routes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.COLORS.DARK,
          tabBarStyle: {
            backgroundColor: theme.COLORS.GRAY900,
          },
        }}
      >
        <Tab.Screen
          name="Images"
          component={StackRoute}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="images-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
