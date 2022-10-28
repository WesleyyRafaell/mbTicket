import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import * as S from './styles'

type TitleProps = {
	children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
	return (
		<S.BoxTitle>
			<LinearGradient
				colors={['#F311A2', '#FB6524']}
				style={styles.linearGradient}
			>
				<S.DetailTitle />
			</LinearGradient>
			<S.Title>{children}</S.Title>
		</S.BoxTitle>
	)
}

const styles = StyleSheet.create({
	linearGradient: {
		width: 8,
		height: 35,
		marginRight: 10
	}
})

export default Title
