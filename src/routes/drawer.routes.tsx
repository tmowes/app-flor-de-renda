import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Sells from '../pages/Sells'
import Buys from '../pages/Buys'
import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import CardsPageTest from '../pages/CardsPageTest'

import DrawerMenu from '../components/DrawerMenu'

const { Navigator, Screen } = createDrawerNavigator()

const DrawerRoutes: React.FC = () => (
  <Navigator drawerContent={() => <DrawerMenu />}>
    <Screen name="Sells" component={Sells} />
    <Screen name="Report" component={CardsPageTest} />
    <Screen name="Buys" component={Buys} />
    <Screen name="Graphic" component={Dashboard} />
    <Screen name="Query" component={Dashboard} />
    <Screen name="Register" component={Admin} />
    <Screen name="SignIn" component={SignIn} />
  </Navigator>
)

export default DrawerRoutes
