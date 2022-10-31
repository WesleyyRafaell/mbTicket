import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import * as S from './styles'

const ImageSlide = () => {
	const width = Dimensions.get('window').width

	const arrFotos = [
		'https://media.discordapp.net/attachments/855429663677087805/1036328559507148921/tipos-de-evento-corporativos.jpg?width=838&height=434',
		'https://media.discordapp.net/attachments/855429663677087805/1029456808634499122/unknown.png',
		'https://media.discordapp.net/attachments/855429663677087805/1026564283896700948/WhatsApp_Image_2022-09-28_at_12.11.14.jpeg',
		'https://media.discordapp.net/attachments/855429663677087805/1012003333382357085/How-to-Make-an-Online-Quiz-Website-Step-by-Step.png'
	]

	return (
		<Carousel
			loop
			width={width}
			height={width / 2}
			autoPlay={true}
			data={arrFotos}
			scrollAnimationDuration={3000}
			renderItem={({ item }) => (
				<S.WrapperItemCarousel>
					<S.ItemCarousel source={{ uri: item }} />
				</S.WrapperItemCarousel>
			)}
		/>
	)
}

export default ImageSlide
