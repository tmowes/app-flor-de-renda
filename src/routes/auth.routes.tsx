import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
// import SignUp from '../pages/SignUp'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFD0F8' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    {/* <Auth.Screen name="SignUp" component={SignUp} /> */}
  </Auth.Navigator>
)

export default AuthRoutes
