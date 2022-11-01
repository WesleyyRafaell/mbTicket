import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import CardEvent from '../../components/CardEvent'

import ImageSlide from '../../components/ImageSlide'

// components
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import { openAlert } from '../../store/System/System.store'

import * as S from './styles'

const Home = () => {
	const dispatch = useDispatch()

	return (
		<S.Container>
			<S.Header>
				<Logo />
				<Input nameIcon="search" size={20} placeholder="Eventos, shows..." />
			</S.Header>
			<ImageSlide />
			<S.Main>
				<TouchableOpacity onPress={() => dispatch(openAlert('teste'))}>
					<S.Text>oi</S.Text>
				</TouchableOpacity>
				<S.FilterContainer>
					<S.FilterButton>
						<S.Image source={require('../../assets/img/filter.png')} />
						<S.Text>Filtrar</S.Text>
					</S.FilterButton>
				</S.FilterContainer>
				<S.ContainerCard>
					<CardEvent />
					<CardEvent />
					<CardEvent />
				</S.ContainerCard>
			</S.Main>
		</S.Container>
	)
}

export default Home
