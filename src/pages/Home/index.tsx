import React from 'react'

// components
import ImageSlide from '../../components/ImageSlide'
import CardEvent from '../../components/CardEvent'
import Input from '../../components/Input'
import Logo from '../../components/Logo'

import * as S from './styles'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

const Home = () => {
	const { events } = useSelector((state: RootState) => state.event)

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
					{events.map((item) => (
						<CardEvent
							key={item.id}
							id={item.id}
							address={item.address}
							image={item.image}
							start_date={item.start_date}
							end_date={item.end_date}
							name={item.name}
						/>
					))}
				</S.ContainerCard>
			</S.Main>
		</S.Container>
	)
}

export default Home
