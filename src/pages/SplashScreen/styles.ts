import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #1b1c1e;
	padding: ${RFValue(25)}px ${RFValue(12)}px;
`
