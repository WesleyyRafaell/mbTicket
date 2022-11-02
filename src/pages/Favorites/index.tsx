import React from 'react'
import CardEvent from '../../components/CardEvent'

import * as S from './styles'

const Favorites = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Title>Favorites</S.Title>
			</S.Header>
			<S.Main>
				<S.ContainerCard>
					<CardEvent />
					<CardEvent />
					<CardEvent />
				</S.ContainerCard>
			</S.Main>
		</S.Container>
	)
}

export default Favorites
