import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

type InputProps = {
	nameIcon: string
	colorIcon?: string
	placeholder: string
	placeholderColor?: string
	size: number
	color?: string
}

const Input = ({
	nameIcon,
	colorIcon = '#A0A0A0',
	placeholder,
	placeholderColor = '#A0A0A0',
	size,
	color = '#A0A0A0'
}: InputProps) => {
	return (
		<S.BoxInput>
			<S.InputIcon>
				<Icon name={nameIcon} size={size} color={colorIcon} />
			</S.InputIcon>
			<S.Input
				color={color}
				placeholder={placeholder}
				placeholderTextColor={placeholderColor}
			/>
		</S.BoxInput>
	)
}

export default Input
