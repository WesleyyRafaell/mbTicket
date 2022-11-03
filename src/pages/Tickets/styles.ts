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
	padding: ${RFValue(25)}px;
`

export const Box = styled.View`
	border-radius: ${RFValue(15)}px;
	overflow: hidden;
	border: 1px solid #dcdcdc;
	margin-bottom: ${RFValue(40)}px;
`

export const HeaderBox = styled.View`
	padding: ${RFValue(10)}px;
	background-color: #f5346c;
`

export const TitleBox = styled.Text`
	color: #fafafa;
	font-family: 'Poppins-Regular';
`

export const BoxMain = styled.View`
	padding: ${RFValue(10)}px;
`

export const WrapperFlex = styled.View`
	flex-direction: row;
	margin-bottom: ${RFValue(6)}px;
`
export const Text = styled.Text`
	color: #7c7c7c;
	font-family: 'Poppins-Regular';
	font-size: ${RFValue(14)}px;
	margin-left: ${RFValue(6)}px;
`
export const Link = styled.TouchableOpacity`
	flex-direction: row;
	margin-bottom: ${RFValue(6)}px;
`
export const TextLink = styled.Text`
	color: #18aec3;
	font-family: 'Poppins-Regular';
	font-size: ${RFValue(14)}px;
	margin-left: ${RFValue(6)}px;
`
