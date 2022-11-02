import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Login from './../pages/Login'
import TabRoutes from './tabRoutes'

const Stack = createNativeStackNavigator()

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName="Login"
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="TabRoutes" component={TabRoutes} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes

// import * as React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-vector-icons/Ionicons'

// import Home from '../routes/Home'
// import Tickets from '../pages/Tickets'
// import Favorites from '../pages/Favorites'
// import Perfil from '../pages/Perfil'

// const Tab = createBottomTabNavigator()

// export default function Routes() {
// 	return (
// 		<NavigationContainer>
// 			<Tab.Navigator
// 				initialRouteName="Home"
// 				screenOptions={({ route }) => ({
// 					tabBarIcon: ({ focused, color, size }) => {
// 						let iconName = 'add'

// 						if (route.name === 'Home') {
// 							iconName = focused ? 'home-sharp' : 'home-outline'
// 						} else if (route.name === 'Ingressos') {
// 							iconName = focused ? 'wallet' : 'wallet-outline'
// 						} else if (route.name === 'Favoritos') {
// 							iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline'
// 						} else if (route.name === 'Perfil') {
// 							iconName = focused ? 'person' : 'person-outline'
// 						}

// 						return <Icon name={iconName} size={size} color={color} />
// 					},
// 					tabBarActiveTintColor: '#F5346C',
// 					tabBarInactiveTintColor: '#7C7C7C',
// 					headerShown: false
// 				})}
// 			>
// 				<Tab.Screen name="Home" component={Home} />
// 				<Tab.Screen name="Ingressos" component={Tickets} />
// 				<Tab.Screen name="Favoritos" component={Favorites} />
// 				<Tab.Screen name="Perfil" component={Perfil} />
// 			</Tab.Navigator>
// 		</NavigationContainer>
// 	)
// }
