import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	background-color: #fafafa;
`

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(173)}px;
	background-color: #1b1c1e;
	justify-content: space-between;
	padding: ${RFValue(25)}px ${RFValue(10)}px;
`
export const Main = styled.View`
	padding: ${RFValue(25)}px ${RFValue(10)}px;
`

export const FilterContainer = styled.View``

export const FilterButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`

export const Image = styled.Image`
	width: ${RFValue(25)}px;
	height: ${RFValue(25)}px;
	margin-right: ${RFValue(8)}px;
`

export const Text = styled.Text`
	font-size: ${RFValue(15)}px;
	color: #1b1c1e;
	font-family: 'Poppins-Regular';
	margin-top: ${RFValue(1)}px;
`
export const ContainerCard = styled.View`
	padding-top: ${RFValue(28)}px;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
`
