import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'

import * as S from './styles'
import { getEvents } from '../../services/events'

const SplashScreen = () => {
	useEffect(() => {
		const loadInitialEvents = async () => {
			const result = await getEvents()
		}

		loadInitialEvents()
	}, [])

	return (
		<S.Container>
			<Lottie
				source={require('./animation.json')}
				autoPlay
				loop
				style={{ width: 250, height: 250 }}
			/>
		</S.Container>
	)
}

export default SplashScreen
