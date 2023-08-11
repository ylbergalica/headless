import React, { createContext, useEffect, useState } from "react";

const VariantContext = createContext();

const VariantProvider = ({ children }) => {
	const [currentVariant, setCurrentVariant] = useState(null);
	const [thumbnailImage, setThumbnail] = useState(null);
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [imagesElement, setImagesElement] = useState(null);

	const updateThumbnail = (image) => {
		if (image !== undefined) {
			setThumbnail(image);
			setActiveImageIndex(currentVariant.images.indexOf(image));
		}
		else {
			setThumbnail(currentVariant?.images[0]);
			setActiveImageIndex(0);
		}
	}
	
	useEffect(() => { // Set the thumbnail image to the initial image when the variant changes
		updateThumbnail();
	}, [currentVariant])

	return (
		<VariantContext.Provider value={{
			currentVariant, 
			setCurrentVariant,
			activeImageIndex,
			thumbnailImage,
			updateThumbnail,
			imagesElement,
			setImagesElement,
		}}>
			{children}
		</VariantContext.Provider>
	)
}

export { VariantContext, VariantProvider };