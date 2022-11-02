import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Login from './../pages/Login'
import TabRoutes from './tabRoutes'
import SplashScreen from '../pages/SplashScreen'

const Stack = createNativeStackNavigator()

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName="SplashScreen"
			>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="TabRoutes" component={TabRoutes} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
