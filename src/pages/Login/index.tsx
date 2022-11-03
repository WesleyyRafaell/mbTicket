import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

// components
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import Title from '../../components/Title'

import * as S from './styles'

const Login = ({ navigation }: any) => {
	return (
		<S.Container>
			<S.Header>
				<Logo />
			</S.Header>
			<S.Box>
				<Title>Sign in</Title>
				<S.ContainerForm>
					<S.WrapperInput>
						<Input placeholder="Email" nameIcon="envelope" size={22} />
					</S.WrapperInput>
					<S.WrapperInput>
						<Input placeholder="Password" nameIcon="lock" size={30} />
					</S.WrapperInput>
					<S.WrapperForgotPass>
						<S.ButtonForgotPass>
							<S.ForgotPass>Forgot your password?</S.ForgotPass>
						</S.ButtonForgotPass>
					</S.WrapperForgotPass>
					<S.ContainerButtonLogin>
						<Button onPress={() => navigation.navigate('Home')}>Login</Button>
					</S.ContainerButtonLogin>
					<S.WrapperButtonFacebook>
						<Icon name="facebook-square" size={30} color="#0097FF" />
						<S.TextButtonFacebook>Entrar com o Facebook</S.TextButtonFacebook>
					</S.WrapperButtonFacebook>
				</S.ContainerForm>
			</S.Box>
		</S.Container>
	)
}

export default Login
