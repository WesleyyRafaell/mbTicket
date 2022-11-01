import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import Button from '../../components/Button'

import * as S from './styles'
import ButtonOutline from '../../components/ButtonOutline'

const Perfil = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Wrapper>
					<S.ProfilePic source={require('../../assets/img/pic.jpg')} />
					<S.BoxText>
						<S.Title>Wesley Rafael</S.Title>
						<S.Text>rafaelsanto10s@gmail.com</S.Text>
					</S.BoxText>
				</S.Wrapper>
				<S.ContainerButton>
					<Button>Editar Perfil</Button>
				</S.ContainerButton>
			</S.Header>
			<S.Main>
				<S.BoxOption>
					<S.BoxOptionTitle>Opções</S.BoxOptionTitle>
					<S.WrapperBoxOption>
						<Icon name="lock-closed-outline" size={30} color="#7C7C7C" />
						<S.BoxOptionText>Alterar senha</S.BoxOptionText>
						<IconFont name="edit" size={30} color="#F5346C" />
					</S.WrapperBoxOption>
					<S.WrapperBoxOption>
						<Icon name="notifications-outline" size={30} color="#7C7C7C" />
						<S.BoxOptionText>Notificações</S.BoxOptionText>
						<IconFont name="edit" size={30} color="#F5346C" />
					</S.WrapperBoxOption>
				</S.BoxOption>
				<S.BoxOption>
					<S.BoxOptionTitle>Ajuda</S.BoxOptionTitle>
					<S.WrapperBoxOption>
						<Icon name="ios-help-circle-outline" size={30} color="#7C7C7C" />
						<S.BoxOptionText>Suporte e duvidas frenquentes</S.BoxOptionText>
						<IconFont name="edit" size={30} color="#F5346C" />
					</S.WrapperBoxOption>
				</S.BoxOption>
				<S.BoxOption>
					<S.BoxOptionTitle>Privacidade</S.BoxOptionTitle>
					<S.WrapperBoxOption noborder>
						<Icon name="file-tray-full-outline" size={30} color="#7C7C7C" />
						<S.BoxOptionText>Termos e políticas</S.BoxOptionText>
						<IconFont name="edit" size={30} color="#F5346C" />
					</S.WrapperBoxOption>
				</S.BoxOption>
				<S.ContainerButtonOutline>
					<ButtonOutline>Sair</ButtonOutline>
				</S.ContainerButtonOutline>
			</S.Main>
		</S.Container>
	)
}

export default Perfil
