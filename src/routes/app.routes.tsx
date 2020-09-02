/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Feather'
import { View, Text } from 'react-native'

import Sells from '../pages/Sells'
import Buys from '../pages/Buys'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'

import DrawerMenu from '../components/DrawerMenu'

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
    drawerContent={() => <DrawerMenu />}
    // drawerContent={drawerHeader}
    // drawerContent={() => <DrawerContent />}
    // screenOptions={({ route }) => ({
    //   drawerIcon: ({ focused, color }) => {
    //     let iconName = ''
    //     if (route.name === 'Sells') {
    //       iconName = focused ? 'shopping-cart' : 'shopping-cart'
    //     } else if (route.name === 'Buys') {
    //       iconName = focused ? 'folder-plus' : 'folder-plus'
    //     } else if (route.name === 'Graphic') {
    //       iconName = focused ? 'bar-chart-2' : 'bar-chart-2'
    //     } else if (route.name === 'Report') {
    //       iconName = focused ? 'list' : 'list'
    //     } else if (route.name === 'Query') {
    //       iconName = focused ? 'search' : 'search'
    //     } else if (route.name === 'Register') {
    //       iconName = focused ? 'plus-square' : 'plus-square'
    //     } else if (route.name === 'SignIn') {
    //       iconName = focused ? 'log-out' : 'log-out'
    //     }
    //     return <Icon name={iconName} size={24} color={color} />
    //   },
    // })}
    // drawerContent
    //   activeTintColor: '#f4EDE8',
    //   activeBackgroundColor: '#730FC3',
    //   inactiveTintColor: '#730FC3',
    // }}
    // drawerStyle={{
    //   backgroundColor: '#FFD0F8',
    // }}
  >
    <App.Screen name="Sells" component={Sells} />
    <App.Screen name="Buys" component={Buys} />
    <App.Screen name="Graphic" component={Dashboard} />
    <App.Screen name="Report" component={Dashboard} />
    <App.Screen name="Query" component={Dashboard} />
    <App.Screen name="Register" component={Admin} />
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
)

export default AppRoutes
