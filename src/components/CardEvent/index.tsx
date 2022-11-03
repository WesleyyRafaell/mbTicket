import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

import * as S from './styles'

import { getArrayEventsStorage } from '../../utils/eventsStorage'

export type CardEventProps = {
	id: string
	address: string
	start_date: string
	end_date: string
	image: string
	name: string
	favorite: boolean
	updateFavorites?: () => void
	navigate: (id: string) => void
}

const CardEvent = ({
	id,
	address,
	end_date,
	start_date,
	image,
	name,
	favorite,
	updateFavorites,
	navigate
}: CardEventProps) => {
	const setFavoriteCard = async () => {
		try {
			if (favorite) {
				await removeFavorite()

				updateFavorites!()

				return
			}

			await setFavorites()

			updateFavorites!()
		} catch (e) {
			console.log(`error`, e)
		}
	}

	const removeFavorite = async () => {
		const arrayCardsValidate = await getArrayEventsStorage()

		const arrayCards = arrayCardsValidate.filter(
			(item: CardEventProps) => item.id !== id
		)

		const jsonCard = JSON.stringify(arrayCards)

		await AsyncStorage.setItem('@storage_card', jsonCard)
	}

	const setFavorites = async () => {
		const arrayCards = await getArrayEventsStorage()

		const card = {
			id,
			address,
			start_date,
			end_date,
			image,
			name,
			favorite: true
		}

		arrayCards.push(card)

		const jsonCard = JSON.stringify(arrayCards)

		await AsyncStorage.setItem('@storage_card', jsonCard)
	}

	return (
		<S.Card onPress={() => navigate(id)}>
			<S.HeaderCard>
				<S.BackgroundCard source={{ uri: image }} />
				<S.ContainerFavorite favorite={favorite} onPress={setFavoriteCard}>
					<Icon
						name="heart-o"
						size={20}
						color={favorite ? '#fff' : '#1b1c1e'}
					/>
				</S.ContainerFavorite>
			</S.HeaderCard>
			<S.MainCard>
				<S.Date>
					{start_date && format(new Date(start_date), 'd LLL')} a{' '}
					{end_date && format(new Date(end_date), 'd LLL')}
				</S.Date>
				<S.Title>{name}</S.Title>
				<S.Place>{address}</S.Place>
			</S.MainCard>
		</S.Card>
	)
}

export default CardEvent
