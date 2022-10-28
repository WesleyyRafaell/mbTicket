import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ButtonLogin = styled.TouchableOpacity`
	width: 100%;
	height: ${RFValue(59)}px;
	justify-content: center;
	align-items: center;
	border-radius: ${RFValue(20)}px;
	overflow: hidden;
`

export const TextButtonLogin = styled.Text`
	font-family: 'Poppins-Bold';
	color: #fff;
	font-size: ${RFValue(15)}px;
`
