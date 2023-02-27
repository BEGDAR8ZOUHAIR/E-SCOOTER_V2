import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';

const Stack = createStackNavigator();

export default function App()
{
  
  LogBox.ignoreLogs(['Remote debugger']);


  return (


    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen 
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false
            }}
          />
           <Stack.Screen
          name="Nav"
          component={Nav}
          options={{
            headerShown: false
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});



