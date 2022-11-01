import React from 'react'

import * as S from './styles'

type ButtonProps = {
	children: React.ReactNode
}

const ButtonOutline = ({ children }: ButtonProps) => {
	return (
		<S.ButtonLogin>
			<S.TextButtonLogin>{children}</S.TextButtonLogin>
		</S.ButtonLogin>
	)
}

export default ButtonOutline
