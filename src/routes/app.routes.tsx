/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Feather'
import { View } from 'react-native'
import Dashboard from '../pages/Dashboard'
import Sells from '../pages/Sells'
import SignIn from '../pages/SignIn'

const App = createDrawerNavigator()

const drawerHeader = () => (
  <View>
    <Icon name="shield-off" size={24} color="green" />
  </View>
)

const AppRoutes: React.FC = () => (
  <App.Navigator
    // drawerContent={drawerHeader}
    screenOptions={({ route }) => ({
      drawerIcon: ({ focused, color }) => {
        let iconName = ''
        if (route.name === 'Sells') {
          iconName = focused ? 'shopping-cart' : 'shopping-cart'
        } else if (route.name === 'Dashboard') {
          iconName = focused ? 'bar-chart-2' : 'bar-chart-2'
        } else if (route.name === 'SignIn') {
          iconName = focused ? 'log-out' : 'log-out'
        }
        return <Icon name={iconName} size={24} color={color} />
      },
    })}
    drawerContentOptions={{
      activeTintColor: '#f4EDE8',
      activeBackgroundColor: '#730FC3',
      inactiveTintColor: '#730FC3',
    }}
    drawerStyle={{
      backgroundColor: '#FFD0F8',
    }}
  >
    <App.Screen
      name="Sells"
      component={Sells}
      options={{ drawerLabel: 'VENDAS/SAÍDAS' }}
    />
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: 'MENU PRINCIPAL' }}
    />
    <App.Screen
      name="SignIn"
      component={SignIn}
      options={{ drawerLabel: 'SAIR' }}
    />
  </App.Navigator>
)

export default AppRoutes
