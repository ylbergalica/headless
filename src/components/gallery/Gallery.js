import React, { useEffect, useRef, useState } from "react";

import ImageSlider from "./ImageSlider";
import ScrollButton from "./ScrollButton";

const Gallery = ({ product }) => {
	const [scroll, setScroll] = useState(0);

	const [sliderHeight, setSliderHeight] = useState(1);

	const galleryElement = useRef();
	const imagesElement = useRef();
	const [galleryMaxScroll, setMaxScroll] = useState(1);

	const [thumbnailImage, setThumbnailImage] = useState(product?.image); // Set the thumbnail image to the initial image
	
	const galleryScroll = (direction) => {
		// Determine direction to scroll
		if (direction.includes("down")) {
			imagesElement.current.scrollTop += 100;
		}
		else if (direction.includes("up")) {
			imagesElement.current.scrollTop -= 100;
		}

		setScroll(imagesElement.current.scrollTop);
	}

	let scrollButtons = [];
	if (product.variants[0].images?.length > 4) {
		scrollButtons.push(
			<ScrollButton
				key='scroll-down'
				classes='bottom-0'
				onClick={() => { galleryScroll("down") }}
				style={{ display: (Math.round(scroll) < galleryMaxScroll) ? 'block' : 'none' }}
			/>
		)

		scrollButtons.push(
			<ScrollButton
				key='scroll-up'
				classes='top-0 transform rotate-180'
				onClick={() => { galleryScroll("up") }}
				style={{ display: (scroll > 0) ? 'block' : 'none' }}
			/>
		)
	}

	const updateThumbnail = (imageSrc) => {
		if (imageSrc !== undefined) {
			setThumbnailImage(imageSrc);
		}
		else {
			setThumbnailImage(product.image);
		}
	}

	// Whenever the slider has completed rendering the images, get the maximum amount we can scroll
	useEffect(() => {
		imagesElement.current = galleryElement.current.children[0];
		setMaxScroll(prevMaxScroll => sliderHeight)
	}, [sliderHeight])

	return (
		<div className='w-full lg:w-1/2 lg:h-full flex flex-col lg:flex-row items-center justify-center'>
			<div ref={galleryElement} className={'relative w-[95%] lg:w-[100px] lg:h-full flex flex-row lg:flex-col justify-start items-end m-0 lg:mr-4 lg:ml-12 order-1 lg:order-0'}>
				<ImageSlider product={product} updateThumbnail={updateThumbnail} setHeight={setSliderHeight} />
				{scrollButtons}
			</div>

			<div className={'w-[90%] lg:min-w-[60%] lg:max-h-[30rem] flex items-center justify-center overflow-hidden select-none order-0 lg:order-1'}>
				<img className={'lg:max-h-[30rem] min-w-fit object-contain'} src={thumbnailImage} />
			</div>
		</div>
	)
}

export default Gallery;