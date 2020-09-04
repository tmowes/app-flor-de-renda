/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerRoutes from './drawer.routes'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' },
    }}
  >
    <Screen name="DrawerRoutes" component={DrawerRoutes} />
  </Navigator>
)

export default AppRoutes
