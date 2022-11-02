import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Home from './../../pages/Home'

const Stack = createNativeStackNavigator()

function Routes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName="HomeStack"
		>
			<Stack.Screen name="HomeStack" component={Home} />
		</Stack.Navigator>
	)
}

export default Routes
