import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { format } from 'date-fns'

import * as S from './styles'

export type CardEventProps = {
	id: string
	address: string
	start_date: string
	end_date: string
	image: string
	name: string
}

const CardEvent = ({
	id,
	address,
	end_date,
	start_date,
	image,
	name
}: CardEventProps) => {
	return (
		<S.Card>
			<S.HeaderCard>
				<S.BackgroundCard source={{ uri: image }} />
				<S.ContainerFavorite>
					<Icon name="heart-o" size={20} color="#1b1c1e" />
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
