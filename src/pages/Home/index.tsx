import React, { useEffect, useState } from 'react'

// components
import ImageSlide from '../../components/ImageSlide'
import CardEvent, { CardEventProps } from '../../components/CardEvent'
import Input from '../../components/Input'
import Logo from '../../components/Logo'

import * as S from './styles'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { getArrayEventsStorage } from '../../utils/eventsStorage'

const Home = ({ navigation }: any) => {
	const { events } = useSelector((state: RootState) => state.event)
	const [eventsHome, setEventsHome] = useState<CardEventProps[]>([])

	const images = events.map((item) => item.image)

	useEffect(() => {
		getFavoritesAsyncStorage()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		navigation.addListener('focus', () => {
			getFavoritesAsyncStorage()
		})
	}, [navigation])

	const getFavoritesAsyncStorage = async () => {
		try {
			const eventsStorage = await getArrayEventsStorage()

			const arrAux = JSON.parse(JSON.stringify(events))

			if (eventsStorage) {
				for (const [index, event] of events.entries()) {
					for (const eventStorage of eventsStorage) {
						if (event.id === eventStorage.id) {
							arrAux[index].favorite = true
						}
					}
				}
			}

			setEventsHome(arrAux)
		} catch (e) {
			console.log(`error`, e)
		}
	}

	const handleNavigation = (id: string) => {
		console.log(id)
		navigation.navigate('EventDetail', { id })
	}

	return (
		<S.Container>
			<S.Header>
				<Logo />
				<Input nameIcon="search" size={20} placeholder="Eventos, shows..." />
			</S.Header>
			<ImageSlide images={images!} />
			<S.Main>
				<S.FilterContainer>
					<S.FilterButton>
						<S.Image source={require('../../assets/img/filter.png')} />
						<S.Text>Filtrar</S.Text>
					</S.FilterButton>
				</S.FilterContainer>
				<S.ContainerCard>
					{eventsHome.map((item) => (
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
							navigate={(id) => handleNavigation(id)}
						/>
					))}
				</S.ContainerCard>
			</S.Main>
		</S.Container>
	)
}

export default Home
