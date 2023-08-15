import React, { useContext, useEffect, useRef } from "react";

import { ItemContext } from "../../context/product-context";

const ImageSlider = ({ setHeight }) => {
	const { currentVariant, updateThumbnail, activeImageIndex, setImagesElement } = useContext(ItemContext);
	
	const imagesElement = useRef();

	const activeStyle = {
		outline: '2px solid rgba(43, 62, 125, 0.6)',
		outlineOffset: '-3px',
		// borderRadius: '99999px',
	}

	let images = currentVariant?.images?.map((image, index) => {
		return (
			<img
				key = {index}
				className = 'slider-image-size mr-4 lg:mr-0 lg:mb-6 cursor-pointer select-none'
				src = {image.asset.url}
				style = { activeImageIndex === index ? activeStyle : {} }
				onClick={() => {
					updateThumbnail(image);
				}}
			/>
		)
	})

	useEffect(() => {
		setImagesElement(imagesElement.current);
	}, [imagesElement])

	useEffect(() => {
		setTimeout(() => {
			setHeight(prevHeight => {
				return imagesElement.current.scrollHeight - imagesElement.current.clientHeight;
			}); // After rendering all images, signal the parent
		}, 100); // Wait for the images to load before setting the height
	}, [images, currentVariant])

	return (
		<div ref={imagesElement} id="images" className='w-full max-h-24 lg:max-h-full lg:h-full relative mt-[5%] flex flex-row lg:flex-col items-center justify-start overflow-x-auto overflow-y-hidden lg:overflow-y-auto lg:no-scrollbar' >
			{images}
		</div>
	)
}

export default ImageSlider;