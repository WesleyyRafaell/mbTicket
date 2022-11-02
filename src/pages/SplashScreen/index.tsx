import React from 'react'
import Lottie from 'lottie-react-native'

import * as S from './styles'

const SplashScreen = () => {
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
