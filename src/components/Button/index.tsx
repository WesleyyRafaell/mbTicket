import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import * as S from './styles'

type ButtonProps = {
	children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
	return (
		<S.ButtonLogin>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={['#F311A2', '#FB6524']}
				style={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<S.TextButtonLogin>{children}</S.TextButtonLogin>
			</LinearGradient>
		</S.ButtonLogin>
	)
}

export default Button
