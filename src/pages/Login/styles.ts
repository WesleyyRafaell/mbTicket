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

export const Logo = styled.Image`
	width: ${RFValue(123)}px;
	height: ${RFValue(23)}px;
`

export const Box = styled.View`
	flex: 1;
	background-color: white;
	border-top-left-radius: ${RFValue(75)}px;
	padding: ${RFValue(50)}px ${RFValue(30)}px;
`

export const BoxTitle = styled.View`
	flex-direction: row;
	align-items: center;
`

export const DetailTitle = styled.View`
	width: ${RFValue(8)}px;
	height: ${RFValue(35)}px;
	margin-right: ${RFValue(10)}px;
`

export const Title = styled.Text`
	font-family: 'Poppins-Bold';
	font-size: ${RFValue(18)}px;
	color: #1b1c1e;
`

export const ContainerForm = styled.View`
	padding-top: ${RFValue(30)}px;
`

export const WrapperInput = styled.View`
	margin: ${RFValue(10)}px 0;
`

export const BoxInput = styled.View`
	border: 1px solid #a0a0a0;
	flex-direction: row;
	align-items: center;
	padding: ${RFValue(5)}px ${RFValue(10)}px;
	border-radius: ${RFValue(5)}px; ;
`

export const InputIcon = styled.Text`
	margin-right: ${RFValue(10)}px;
`

export const Input = styled.TextInput`
	height: ${RFValue(35)}px;
	flex: 1;
	padding: 0;
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
export const ButtonLogin = styled.TouchableOpacity`
	width: 100%;
	height: ${RFValue(59)}px;
	background-color: tomato;
	justify-content: center;
	align-items: center;
	border-radius: ${RFValue(20)}px;
	margin-top: ${RFValue(50)}px;
	overflow: hidden;
`

export const TextButtonLogin = styled.Text`
	font-family: 'Poppins-Bold';
	color: #fff;
	font-size: ${RFValue(15)}px;
`
export const WrapperButtonFacebook = styled.View`
	padding-top: ${RFValue(25)}px;
	align-items: center;
`

export const ButtonFacebook = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: ${RFValue(170)}px;
`

export const TextButtonFacebook = styled.Text`
	color: #0097ff;
`
