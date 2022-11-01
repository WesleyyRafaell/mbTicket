import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../routes/Home'
import Tickets from '../pages/Tickets'
import Favorites from '../pages/Favorites'
import Perfil from '../pages/Perfil'

const Tab = createBottomTabNavigator()

export default function Routes() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="HomeTab"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName = 'add'

						if (route.name === 'HomeTab') {
							iconName = focused ? 'home-sharp' : 'home-outline'
						} else if (route.name === 'Tickets') {
							iconName = focused ? 'wallet' : 'wallet-outline'
						} else if (route.name === 'Favorites') {
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
				<Tab.Screen name="HomeTab" component={Home} />
				<Tab.Screen name="Tickets" component={Tickets} />
				<Tab.Screen name="Favorites" component={Favorites} />
				<Tab.Screen name="Perfil" component={Perfil} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
