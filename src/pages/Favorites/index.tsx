import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import CardEvent, { CardEventProps } from '../../components/CardEvent'

import * as S from './styles'
import { getArrayEventsStorage } from '../../utils/eventsStorage'

const Favorites = ({ navigation }: any) => {
	const [arrayCards, setArrayCards] = useState<CardEventProps[] | null>()

	useEffect(() => {
		navigation.addListener('focus', () => {
			getFavoritesAsyncStorage()
		})
	}, [navigation])

	const getFavoritesAsyncStorage = async () => {
		try {
			const cards = await getArrayEventsStorage()

			if (cards.length === 0) {
				setArrayCards(null)
				return
			}
			setArrayCards(cards)
		} catch (e) {
			// error reading value
		}
	}

	return (
		<S.Container>
			<S.Header>
				<S.Title>Favoritos</S.Title>
			</S.Header>
			<S.Main>
				{!arrayCards ? (
					<S.ContainerNoneFavorites>
						<S.Image source={require('../../assets/img/sad.png')} />
						<S.Text>Nenhum favorito ainda</S.Text>
					</S.ContainerNoneFavorites>
				) : (
					<S.ContainerCard>
						{arrayCards.map((item) => (
							<CardEvent
								key={item.id}
								id={item.id}
								address={item.address}
								image={item.image}
								start_date={item.start_date}
								end_date={item.end_date}
								name={item.name}
								favorite={item.favorite}
								updateFavorites={() => getFavoritesAsyncStorage()}
							/>
						))}
					</S.ContainerCard>
				)}
			</S.Main>
		</S.Container>
	)
}

export default Favorites
