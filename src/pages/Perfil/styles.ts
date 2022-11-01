import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #fafafa;
	padding: ${RFValue(25)}px ${RFValue(12)}px;
`

export const Header = styled.View``

export const Wrapper = styled.View`
	flex-direction: row;
	align-items: center;
`

export const BoxText = styled.View``

export const Title = styled.Text`
	font-family: 'Poppins-Bold';
	color: #1b1c1e;
	font-size: ${RFValue(23)}px;
`

export const Text = styled.Text`
	font-family: 'Poppins-Regular';
	font-size: ${RFValue(13)}px;
`

export const ProfilePic = styled.Image`
	width: ${RFValue(93)}px;
	height: ${RFValue(93)}px;
	border-radius: ${RFValue(93)}px;
	margin-right: ${RFValue(21)}px;
`

export const ContainerButton = styled.View`
	padding-top: ${RFValue(40)}px;
`

export const Main = styled.View`
	padding-top: ${RFValue(50)}px;
`

export const BoxOption = styled.View``

type WrapperBoxOptionProps = {
	noborder?: boolean
}

export const WrapperBoxOption = styled.TouchableOpacity<WrapperBoxOptionProps>`
	${({ noborder }) => css`
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #fafafa;
		padding-bottom: ${RFValue(26)}px;
		margin-bottom: ${RFValue(30)}px;
		border-bottom-color: ${noborder ? ' #fafafa' : '#dcdcdc'};
	`}
`

export const BoxOptionTitle = styled.Text`
	font-family: 'Poppins-Bold';
	color: #1b1c1e;
	font-size: ${RFValue(17)}px;
	margin-bottom: ${RFValue(30)}px;
`
export const BoxOptionText = styled.Text`
	flex: 1;
	font-family: 'Poppins-Regular';
	color: #7c7c7c;
	font-size: ${RFValue(16)}px;
	margin-left: ${RFValue(15)}px;
	margin-top: ${RFValue(5)}px;
`
export const ContainerButtonOutline = styled.View`
	padding: ${RFValue(20)}px;
	margin-bottom: ${RFValue(40)}px;
`
