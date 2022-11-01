import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Login from './../../pages/Login'
import Home from './../../pages/Home'

const Stack = createNativeStackNavigator()

function Routes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName="Home"
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	)
}

export default Routes
