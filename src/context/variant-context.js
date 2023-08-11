import React, { createContext, useEffect, useState } from "react";

const VariantContext = createContext();

const VariantProvider = ({ children }) => {
	const [currentVariant, setCurrentVariant] = useState(null);

	useEffect(() => {
		console.log(currentVariant);
	}, [currentVariant])

	return (
		<VariantContext.Provider value={{currentVariant, setCurrentVariant}}>
			{children}
		</VariantContext.Provider>
	)
}

export { VariantContext, VariantProvider };