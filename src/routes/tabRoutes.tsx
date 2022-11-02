import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../routes/Home'
import Tickets from '../pages/Tickets'
import Favorites from '../pages/Favorites'
import Perfil from '../pages/Perfil'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = 'add'

					if (route.name === 'Home') {
						iconName = focused ? 'home-sharp' : 'home-outline'
					} else if (route.name === 'Ingressos') {
						iconName = focused ? 'wallet' : 'wallet-outline'
					} else if (route.name === 'Favoritos') {
						iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline'
					} else if (route.name === 'Perfil') {
						iconName = focused ? 'person' : 'person-outline'
					}

					return <Icon name={iconName} size={size} color={color} />
				},
				tabBarActiveTintColor: '#F5346C',
				tabBarInactiveTintColor: '#7C7C7C',
				headerShown: false
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Ingressos" component={Tickets} />
			<Tab.Screen name="Favoritos" component={Favorites} />
			<Tab.Screen name="Perfil" component={Perfil} />
		</Tab.Navigator>
	)
}
