/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Sells from '../pages/Sells'
import Buys from '../pages/Buys'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'

import DrawerMenu from '../components/DrawerMenu'

const App = createDrawerNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator drawerContent={() => <DrawerMenu />}>
    <App.Screen name="Sells" component={Sells} />
    {/* <App.Screen name="Buys" component={Buys} />
    <App.Screen name="Graphic" component={Dashboard} />
    <App.Screen name="Report" component={Dashboard} />
    <App.Screen name="Query" component={Dashboard} />
    <App.Screen name="Register" component={Admin} />
    <App.Screen name="SignIn" component={SignIn} /> */}
  </App.Navigator>
)

export default AppRoutes
