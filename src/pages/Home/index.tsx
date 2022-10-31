import React from 'react'

import CardEvent from '../../components/CardEvent'

import ImageSlide from '../../components/ImageSlide'

// components
import Input from '../../components/Input'
import Logo from '../../components/Logo'

import * as S from './styles'

const Home = () => {
	return (
		<S.Container>
			<S.Header>
				<Logo />
				<Input nameIcon="search" size={20} placeholder="Eventos, shows..." />
			</S.Header>
			<ImageSlide />
			<S.Main>
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
