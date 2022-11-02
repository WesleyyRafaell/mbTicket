import React, { useEffect } from 'react'
import Lottie from 'lottie-react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import * as S from './styles'
import { getEvents } from '../../services/events'
import { useDispatch } from 'react-redux'
import { addEvents } from '../../store/Events/Event.store'
import { RootStackParamList } from '../../routes'

type EventsFromApi = {
	address: {
		name: string
	}
	cancelled: number
	category_prim: []
	category_sec: []
	detail: string
	end_date: string
	host: []
	id: number
	image: string
	name: string
	private_event: number
	published: number
	start_date: string
	url: string
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'SplashScreen'
>

type Props = {
	navigation: ProfileScreenNavigationProp
}

const SplashScreen = ({ navigation }: any) => {
	const dispatch = useDispatch()

	useEffect(() => {
		const token = true

		if (!token) {
			navigation.navigate('Login')
			return
		}

		loadInitialEvents()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const loadInitialEvents = async () => {
		const result = await getEvents()

		if (!result) {
			navigation.navigate('TabRoutes')
			return
		}

		const formatedArrayEventsData = formatArray(result.data)

		console.log()

		dispatch(addEvents(formatedArrayEventsData))
		navigation.navigate('TabRoutes')
	}

	const formatArray = (array: []) => {
		return array.map(
			({ id, start_date, end_date, name, image, address }: EventsFromApi) => {
				return {
					id,
					start_date,
					end_date,
					name,
					image,
					address: address.name
				}
			}
		)
	}

	return (
		<S.Container>
			<Lottie
				source={require('./animation.json')}
				autoPlay
				loop
				style={{ width: 250, height: 250 }}
			/>
		</S.Container>
	)
}

export default SplashScreen
