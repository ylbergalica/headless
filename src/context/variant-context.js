import React, { createContext, useEffect, useState } from "react";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
	const [currentItem, setCurrentItem] = useState(null);
	const [currentVariant, setCurrentVariant] = useState(null);
	const [currentOptions, setCurrentOptions] = useState(null); // { color: 'Red' , size: 'Medium'}

	const [thumbnailImage, setThumbnail] = useState(null);
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [imagesElement, setImagesElement] = useState(null);

	const updateThumbnail = (image) => {
		if (image !== undefined) {
			setThumbnail(image);
			setActiveImageIndex(currentVariant?.images.indexOf(image));
		}
		else {
			if (currentVariant?.images) {
				setThumbnail(currentVariant?.images[0]);
			}
			else {
				setThumbnail(null);
			}
			setActiveImageIndex(0);
		}
	}

	useEffect(() => {
		let newOptions = {}
		currentItem?.options?.forEach(field => {
			newOptions = {
				...newOptions,
				[field.name]: field.values[0]
			}
		})
		
		setCurrentOptions(newOptions);
	}, [currentItem])
	
	useEffect(() => {
		setCurrentVariant(prevVariant => 
			currentItem?.variants?.find(variant => { // Find the variant that matches the current options or return null
				let match = true;
				for (const [key, value] of Object.entries(currentOptions)) { // Check if the variant has the same options as the current options
					if (!variant.title.includes(value)) {
						match = false;
					}
				}
				return match;
			}) || null
		)
	}, [currentOptions])

	useEffect(() => { // Set the thumbnail image to the initial image when the variant changes
		updateThumbnail();
	}, [currentVariant])

	return (
		<ItemContext.Provider value={{
			currentItem,
			setCurrentItem,
			setCurrentOptions,
			currentVariant, 
			setCurrentVariant,
			activeImageIndex,
			thumbnailImage,
			updateThumbnail,
			imagesElement,
			setImagesElement,
		}}>
			{children}
		</ItemContext.Provider>
	)
}

export { ItemContext, ItemProvider };