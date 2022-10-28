import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

const Login = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Logo source={require('../../assets/img/image1.png')} />
			</S.Header>
			<S.Box>
				<S.BoxTitle>
					<LinearGradient
						colors={['#F311A2', '#FB6524']}
						style={styles.linearGradient}
					>
						<S.DetailTitle />
					</LinearGradient>
					<S.Title>Sign in</S.Title>
				</S.BoxTitle>
				<S.ContainerForm>
					<S.WrapperInput>
						<S.BoxInput>
							<S.InputIcon>
								<Icon name="envelope" size={22} color="#A0A0A0" />
							</S.InputIcon>
							<S.Input />
						</S.BoxInput>
					</S.WrapperInput>
					<S.WrapperInput>
						<S.BoxInput>
							<S.InputIcon>
								<Icon name="lock" size={30} color="#A0A0A0" />
							</S.InputIcon>
							<S.Input />
						</S.BoxInput>
					</S.WrapperInput>
					<S.WrapperForgotPass>
						<S.ButtonForgotPass>
							<S.ForgotPass>Forgot your password?</S.ForgotPass>
						</S.ButtonForgotPass>
					</S.WrapperForgotPass>
					<S.ButtonLogin>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							colors={['#F311A2', '#FB6524']}
							style={{
								width: '100%',
								height: '100%',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<S.TextButtonLogin>Login</S.TextButtonLogin>
						</LinearGradient>
					</S.ButtonLogin>
					<S.WrapperButtonFacebook>
						<S.ButtonFacebook>
							<Icon name="facebook-square" size={30} color="#0097FF" />
							<S.TextButtonFacebook>Entrar com o Facebook</S.TextButtonFacebook>
						</S.ButtonFacebook>
					</S.WrapperButtonFacebook>
				</S.ContainerForm>
			</S.Box>
		</S.Container>
	)
}

const styles = StyleSheet.create({
	linearGradient: {
		width: 8,
		height: 35,
		marginRight: 10
	}
})

export default Login
