/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Feather'
import { View, Text } from 'react-native'

import Sells from '../pages/Sells'
import Buys from '../pages/Buys'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'

const App = createDrawerNavigator()

// const drawerHeader = () => (
//   <View>
//     <Icon name="shield-off" size={24} color="green" />
//   </View>
// )

// function DrawerContent() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text>Test</Text>
//     </View>
//   )
// }

const AppRoutes: React.FC = () => (
  <App.Navigator
    // drawerContent={drawerHeader}
    // drawerContent={() => <DrawerContent />}
    screenOptions={({ route }) => ({
      drawerIcon: ({ focused, color }) => {
        let iconName = ''
        if (route.name === 'Sells') {
          iconName = focused ? 'shopping-cart' : 'shopping-cart'
        } else if (route.name === 'Buys') {
          iconName = focused ? 'folder-plus' : 'folder-plus'
        } else if (route.name === 'Graphic') {
          iconName = focused ? 'bar-chart-2' : 'bar-chart-2'
        } else if (route.name === 'Report') {
          iconName = focused ? 'list' : 'list'
        } else if (route.name === 'Query') {
          iconName = focused ? 'search' : 'search'
        } else if (route.name === 'Register') {
          iconName = focused ? 'plus-square' : 'plus-square'
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
      name="Buys"
      component={Buys}
      options={{ title: 'COMPRAS/ENTRADA' }}
    />
    <App.Screen
      name="Graphic"
      component={Dashboard}
      options={{ title: 'GRAFICOS' }}
    />
    <App.Screen
      name="Report"
      component={Dashboard}
      options={{ title: 'RELATÓRIOS' }}
    />
    <App.Screen
      name="Query"
      component={Dashboard}
      options={{ title: 'CONSULTAS' }}
    />
    <App.Screen
      name="Register"
      component={Admin}
      options={{ title: 'CADASTROS' }}
    />
    <App.Screen
      name="SignIn"
      component={SignIn}
      options={{ drawerLabel: 'SAIR' }}
    />
  </App.Navigator>
)

export default AppRoutes
