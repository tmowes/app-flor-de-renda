import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import Sells from '../pages/Sells'
import Admin from '../pages/Admin'
import { Icon } from 'react-native-vector-icons/Icon';
import { View } from 'react-native';

const App = createDrawerNavigator();

// const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    drawerContentOptions={{
      activeTintColor: '#f4EDE8',
      activeBackgroundColor: '#730FC3',
      inactiveTintColor: '#730FC3',
    }}
    drawerStyle={{
      backgroundColor:"#FFD0F8",

    }}
    // screenOptions={{
    //   // headerShown: false,
    //   headerStyle: {
    //     // backgroundColor: '#9d49d3',
    //     maxHeight: 30,
    //     height: 60,
    //   },
    //   headerTintColor: '#f4ede8',
    //   headerTitleAlign: 'center',
    //   cardStyle: { backgroundColor: '#FFD0F8' },
    // }}
  >
    {/* TODO: REMOVE LOGIN SCREEN FROM HERE */}
    <App.Screen
      name="Sells"
      component={Sells}
      options={{
        drawerLabel: 'VENDAS/SAÍDAS',
        drawerIcon:  ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
        }} />
    <App.Screen
      // options={{ headerShown: false }}
      name="SignIn"
      component={SignIn}
      options={{ title: 'LOGIN' }}
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
