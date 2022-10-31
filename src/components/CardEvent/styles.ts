import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Card = styled.View`
	width: ${RFValue(150)}px;
	border-radius: ${RFValue(10)}px;
	overflow: hidden;
	border: 1px solid #dcdcdc;
	margin-bottom: ${RFValue(15)}px;
`

export const HeaderCard = styled.View`
	height: ${RFValue(84)}px;
	position: relative;
`

export const BackgroundCard = styled.ImageBackground`
	flex: 1;
	width: 100%;
	height: 100%;
`

export const ContainerFavorite = styled.TouchableOpacity`
	width: ${RFValue(30)}px;
	height: ${RFValue(30)}px;
	border-radius: ${RFValue(30)}px;
	justify-content: center;
	align-items: center;
	background-color: #fafafa;
	position: absolute;
	top: 50%;
	right: 5%;
`
export const MainCard = styled.View`
	padding: ${RFValue(5)}px;
`

export const Date = styled.Text`
	color: #f5346c;
	font-family: 'Poppins-Bold';
	font-size: ${RFValue(11)}px;
`

export const Title = styled.Text`
	color: #1b1c1e;
	font-family: 'Poppins-Bold';
	font-size: ${RFValue(14)}px;
`

export const Place = styled.Text`
	color: #7c7c7c;
	font-family: 'Poppins-Regular';
	font-size: ${RFValue(11)}px;
`
