import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ product, updateThumbnail, setHeight }) => {
	const [activeImage, setActiveImage] = useState(0);
	const imagesElement = useRef();

	const activeStyle = {
		outline: '2px solid rgba(43, 62, 125, 0.6)',
		outlineOffset: '-3px',
		// borderRadius: '99999px',
	}

	let images = product.variants[0].images?.map((image, index) => {
		return (
			<img
				key = {index}
				className = 'slider-image-size mr-4 lg:mr-0 lg:mb-6 cursor-pointer select-none'
				src = {image.asset.url}
				style = { activeImage === index ? activeStyle : {} }
				onClick={() => {
					setActiveImage(index);
					updateThumbnail(image.asset.url);
				}}
			/>
		)
	})

	useEffect(() => {
		setHeight(prevHeight => {
			return imagesElement.current.scrollHeight - imagesElement.current.clientHeight;
		}); // After rendering all images, signal the parent
	}, [images])

	return (
		<div ref={imagesElement} className='w-full lg:h-full relative mt-[5%] flex flex-row lg:flex-col items-center justify-start overflow-x-auto lg:overflow-y-auto no-scrollbar' >
			{images}
		</div>
	)
}

export default ImageSlider;