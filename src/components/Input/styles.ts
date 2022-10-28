import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

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
