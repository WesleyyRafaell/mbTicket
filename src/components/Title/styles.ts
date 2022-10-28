import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

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
