import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

import * as S from './styles'
import { useDispatch } from 'react-redux'
import { addEvents } from '../../store/Events/Event.store'
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
}

const CardEvent = ({
	id,
	address,
	end_date,
	start_date,
	image,
	name,
	favorite,
	updateFavorites
}: CardEventProps) => {
	const [handleFavorite, setHandleFavorite] = useState(favorite)

	const setFavoriteCard = async () => {
		try {
			if (handleFavorite) {
				setHandleFavorite(false)

				await removeFavorite()

				updateFavorites!()

				return
			}

			setHandleFavorite(true)

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
		<S.Card onPress={() => console.log(`oi card`)}>
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
