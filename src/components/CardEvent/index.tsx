import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

const CardEvent = () => {
	return (
		<S.Card>
			<S.HeaderCard>
				<S.BackgroundCard source={{ uri: 'https://reactjs.org/logo-og.png' }} />
				<S.ContainerFavorite>
					<Icon name="heart-o" size={20} color="#1b1c1e" />
				</S.ContainerFavorite>
			</S.HeaderCard>
			<S.MainCard>
				<S.Date>sex., 04 nov - 08:00</S.Date>
				<S.Title>Pzeiro - imperatriz </S.Title>
				<S.Place>aabb Imperatriz</S.Place>
			</S.MainCard>
		</S.Card>
	)
}

export default CardEvent
