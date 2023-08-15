import React, { useContext, useRef, useState } from "react";

import ImageSlider from "./ImageSlider";
import ScrollButton from "./ScrollButton";

import { ItemContext } from "../../context/variant-context";

const Gallery = () => {	
	const [scroll, setScroll] = useState(0);
	const [sliderHeight, setSliderHeight] = useState(1);

	const { currentVariant, thumbnailImage, imagesElement } = useContext(ItemContext);
	
	const galleryElement = useRef();
	// const imagesElement = useRef();
	
	const galleryScroll = (direction) => {
		// Determine direction to scroll
		if (direction.includes("down")) {
			imagesElement.scrollTop += 100;
		}
		else if (direction.includes("up")) {
			imagesElement.scrollTop -= 100;
		}

		setScroll(imagesElement.scrollTop);
	}

	let scrollButtons = [];
	if (currentVariant?.images?.length > 4) {
		scrollButtons.push(
			<ScrollButton
				key='scroll-down'
				classes={'bottom-0 ' + (Math.round(scroll) < sliderHeight ? 'lg:!block' : 'none')}
				onClick={() => { galleryScroll("down") }}
			/>
		)

		scrollButtons.push(
			<ScrollButton
				key='scroll-up'
				classes={'top-0 transform rotate-180 ' + (scroll > 0 ? 'lg:!block' : 'none')}
				onClick={() => { galleryScroll("up") }}
			/>
		)
	}

	return (
		<div className='w-full lg:w-1/2 lg:h-[30rem] flex flex-col lg:flex-row items-center justify-center'>
			<div ref={galleryElement} className={'relative w-[95%] lg:w-[100px] lg:h-full flex flex-row lg:flex-col justify-start items-end m-0 lg:mr-4 lg:ml-12 order-1 lg:order-0'}>
				<ImageSlider setHeight={setSliderHeight} />
				{scrollButtons}
			</div>

			<div className={'w-[90%] h-[30rem] lg:min-w-[60%] lg:max-h-[30rem] flex items-center justify-center overflow-hidden select-none order-0 lg:order-1'}>
				<img className={'max-h-full lg:max-h-[30rem] lg:min-w-fit object-contain'} src={thumbnailImage?.asset.url} />
			</div>
		</div>
	)
}

export default Gallery;