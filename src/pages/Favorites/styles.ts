import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	background-color: #fafafa;
`

export const Header = styled.View`
	padding: ${RFValue(25)}px ${RFValue(10)}px;
	border: 1px solid #fafafa;
	border-bottom-color: #dcdcdc;
`

export const Title = styled.Text`
	font-family: 'Poppins-Bold';
	color: #1b1c1e;
	font-size: ${RFValue(17)}px;
`
export const Main = styled.View`
	padding: ${RFValue(15)}px ${RFValue(10)}px;
`

export const ContainerCard = styled.View`
	padding-top: ${RFValue(28)}px;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
`
