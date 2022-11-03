import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #fafafa;
`
export const Header = styled.View``

export const ImageContainer = styled.View`
	height: ${RFValue(210)}px;
`

export const Image = styled.Image`
	width: 100%;
	height: 100%;
`
export const Main = styled.View`
	padding: ${RFValue(25)}px ${RFValue(15)}px;
`

export const WrapperFlex = styled.View`
	flex-direction: row;
	margin-bottom: ${RFValue(6)}px;
`

export const Title = styled.Text`
	font-family: 'Poppins-Bold';
	color: #1b1c1e;
	font-size: ${RFValue(20)}px;
`

export const Text = styled.Text`
	color: #7c7c7c;
	font-family: 'Poppins-Regular';
	font-size: ${RFValue(14)}px;
	margin-left: ${RFValue(6)}px;
`
export const BoxDescription = styled.View`
	padding-top: ${RFValue(20)}px;
	margin-bottom: ${RFValue(20)}px;
`

export const TitleDescription = styled.Text`
	font-family: 'Poppins-Bold';
	color: #1b1c1e;
	font-size: ${RFValue(15)}px;
`
export const LoaderContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const ContainerButton = styled.View`
	padding-top: ${RFValue(40)}px;
`
