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
import { Provider } from 'react-redux'
import { store } from './src/store'

import Routes from './src/routes'
import Alert from './src/components/Alert'

const App = () => {
	return (
		<Provider store={store}>
			<StatusBar barStyle="light-content" backgroundColor="#1b1c1e" />
			<Routes />
			<Alert />
		</Provider>
	)
}

export default App
