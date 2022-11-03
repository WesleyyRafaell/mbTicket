import React from 'react'

import * as S from './styles'

type ButtonProps = {
	children: React.ReactNode
	onPress: () => void
}

const ButtonOutline = ({ children, onPress }: ButtonProps) => {
	return (
		<S.ButtonLogin onPress={onPress}>
			<S.TextButtonLogin>{children}</S.TextButtonLogin>
		</S.ButtonLogin>
	)
}

export default ButtonOutline
