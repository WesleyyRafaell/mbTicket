import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

const Tickets = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Title>Meus eventos</S.Title>
			</S.Header>
			<S.Main>
				<S.Box>
					<S.HeaderBox>
						<S.TitleBox>Evento tecnologia </S.TitleBox>
					</S.HeaderBox>
					<S.BoxMain>
						<S.WrapperFlex>
							<Icon name="map-marker" size={20} color="#7c7c7c" />
							<S.Text>pago em: 15/09/2022 15:05</S.Text>
						</S.WrapperFlex>
						<S.WrapperFlex>
							<Icon name="credit-card" size={20} color="#7c7c7c" />
							<S.Text>Visa - 0328</S.Text>
						</S.WrapperFlex>
						<S.WrapperFlex>
							<Icon name="money" size={20} color="#7c7c7c" />
							<S.Text>R$201,60</S.Text>
						</S.WrapperFlex>
						<S.Link>
							<Icon name="file-text" size={20} color="#18AEC3" />
							<S.TextLink>Ver recibo</S.TextLink>
						</S.Link>
						<S.Link>
							<Icon name="clone" size={20} color="#18AEC3" />
							<S.TextLink>Ver ingressos</S.TextLink>
						</S.Link>
					</S.BoxMain>
				</S.Box>
				<S.Box>
					<S.HeaderBox>
						<S.TitleBox>Palestra Web 3.0</S.TitleBox>
					</S.HeaderBox>
					<S.BoxMain>
						<S.WrapperFlex>
							<Icon name="map-marker" size={20} color="#7c7c7c" />
							<S.Text>pago em: 16/09/2022 15:05</S.Text>
						</S.WrapperFlex>
						<S.WrapperFlex>
							<Icon name="credit-card" size={20} color="#7c7c7c" />
							<S.Text>Visa - 0328</S.Text>
						</S.WrapperFlex>
						<S.WrapperFlex>
							<Icon name="money" size={20} color="#7c7c7c" />
							<S.Text>R$200,60</S.Text>
						</S.WrapperFlex>
						<S.Link>
							<Icon name="file-text" size={20} color="#18AEC3" />
							<S.TextLink>Ver recibo</S.TextLink>
						</S.Link>
						<S.Link>
							<Icon name="clone" size={20} color="#18AEC3" />
							<S.TextLink>Ver ingressos</S.TextLink>
						</S.Link>
					</S.BoxMain>
				</S.Box>
			</S.Main>
		</S.Container>
	)
}

export default Tickets
