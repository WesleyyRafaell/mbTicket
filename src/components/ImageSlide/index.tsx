import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import * as S from './styles'

type ImageSlideProps = {
	images: string[]
}

const ImageSlide = ({ images }: ImageSlideProps) => {
	const width = Dimensions.get('window').width

	return (
		<Carousel
			loop
			width={width}
			height={width / 2}
			autoPlay={true}
			data={images}
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
