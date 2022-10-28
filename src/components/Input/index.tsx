import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

type InputProps = {
	nameIcon: string
	placeholder: string
	size: number
}

const Input = ({ nameIcon, placeholder, size }: InputProps) => {
	return (
		<S.BoxInput>
			<S.InputIcon>
				<Icon name={nameIcon} size={size} color="#A0A0A0" />
			</S.InputIcon>
			<S.Input placeholder={placeholder} />
		</S.BoxInput>
	)
}

export default Input
