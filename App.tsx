/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { StatusBar } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import Routes from './src/routes'

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor={Colors.lighter} />
			<Routes />
		</>
	)
}

export default App
