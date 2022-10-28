import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	background-color: #1b1c1e;
`

export const Header = styled.View`
	height: ${RFValue(200)}px;
	justify-content: center;
	align-items: center;
`

export const Box = styled.View`
	flex: 1;
	background-color: white;
	border-top-left-radius: ${RFValue(75)}px;
	padding: ${RFValue(50)}px ${RFValue(30)}px;
`

export const ContainerForm = styled.View`
	padding-top: ${RFValue(30)}px;
`

export const WrapperInput = styled.View`
	margin: ${RFValue(10)}px 0;
`

export const WrapperForgotPass = styled.View`
	align-items: flex-end;
	margin-top: ${RFValue(5)}px;
`

export const ButtonForgotPass = styled.TouchableOpacity``

export const ForgotPass = styled.Text`
	color: #1b1c1e;
	font-family: 'Poppins-Regular';
`

export const ContainerButtonLogin = styled.View`
	margin-top: ${RFValue(50)}px;
`

export const WrapperButtonFacebook = styled.TouchableOpacity`
	width: 100%;
	padding-top: ${RFValue(25)}px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

export const TextButtonFacebook = styled.Text`
	color: #0097ff;
	margin-left: ${RFValue(10)}px;
`
