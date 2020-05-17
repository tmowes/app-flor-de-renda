import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Sells from '../pages/Sells'
import Admin from '../pages/Admin'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#9d49d3',
        maxHeight: 30,
        height: 60,
      },
      headerTintColor: '#f4ede8',
      headerTitleAlign: 'center',
      cardStyle: { backgroundColor: '#FFD0F8' },
    }}
  >
    {/* TODO: REMOVE LOGIN SCREEN FROM HERE */}
    <App.Screen name="Sells" component={Sells} options={{ title: 'VENDAS' }} />
    <App.Screen
      options={{ headerShown: false }}
      name="SignIn"
      component={SignIn}
    />
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: 'MENU PRINCIPAL' }}
    />
    <App.Screen
      name="Admin"
      component={Admin}
      options={{ title: 'ADMINISTRATIVO' }}
    />
  </App.Navigator>
)

export default AppRoutes
