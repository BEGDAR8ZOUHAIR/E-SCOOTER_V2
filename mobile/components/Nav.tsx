import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Login: focused ? 'log-in' : 'log-in-outline',
            Register: focused ? 'person-add' : 'person-add-outline',
            Dashboard: focused ? 'list' : 'list-outline',
          };

          const iconName = icons[route.name as keyof typeof icons];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#92E3A9',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Tabs;
