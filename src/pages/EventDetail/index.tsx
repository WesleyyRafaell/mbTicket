import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html'
import * as S from './styles'
import { getDetailEvent } from '../../services/events'
import { format } from 'date-fns'
import Button from '../../components/Button'

type EventDetailProps = {
	address: string
	start_date: string
	end_date: string
	image: string
	name: string
	detail: string
	category_prim: string
}

const EventDetail = ({ route }: any) => {
	const { id } = route.params
	const { width } = useWindowDimensions()

	const [eventsData, setEventsData] = useState<EventDetailProps | null>()

	useEffect(() => {
		const getData = async () => {
			const result = await getDetailEvent(id)
			if (!result) return

			// console.log(`result`, result)
			const {
				name,
				address,
				start_date,
				end_date,
				image,
				detail,
				category_prim
			} = result.data

			const obj = {
				name,
				address: address.name,
				start_date,
				end_date,
				image,
				detail,
				category_prim
			}

			setEventsData({ ...obj })
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const source = {
		html: `${eventsData?.detail}`
	}

	return (
		<>
			{!eventsData ? (
				<S.LoaderContainer>
					<ActivityIndicator size="large" color="#F5346C" />
				</S.LoaderContainer>
			) : (
				<S.Container>
					<S.Header>
						<S.ImageContainer>
							<S.Image source={{ uri: eventsData.image }} />
						</S.ImageContainer>
					</S.Header>
					<S.Main>
						<S.Title>{eventsData.name}</S.Title>
						<S.WrapperFlex>
							<Icon name="calendar-o" size={20} color="#7c7c7c" />
							<S.Text>
								{eventsData.start_date &&
									format(new Date(eventsData.start_date), 'd LLLL')}{' '}
								a{' '}
								{eventsData.end_date &&
									format(new Date(eventsData.end_date), 'd LLLL')}
							</S.Text>
						</S.WrapperFlex>
						<S.WrapperFlex>
							<Icon name="map-marker" size={20} color="#7c7c7c" />
							<S.Text>{eventsData.address}</S.Text>
						</S.WrapperFlex>
						<S.BoxDescription>
							<S.TitleDescription>Descrição do evento</S.TitleDescription>
							<RenderHtml contentWidth={width} source={source} />
						</S.BoxDescription>
						<S.ContainerButton>
							<Button>Comprar ingressos</Button>
						</S.ContainerButton>
					</S.Main>
				</S.Container>
			)}
		</>
	)
}

export default EventDetail
