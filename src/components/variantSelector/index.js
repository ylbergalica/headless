import React, { useContext, useEffect } from "react";

import OptionSelector from "./OptionSelector";

import { ItemContext } from "../../context/product-context";

const VariantSelector = ({ options, variants }) => {
	const { setCurrentVariant } = useContext(ItemContext);

	useEffect(() => {
		if (variants) {
			setCurrentVariant(variants[0] || null);
		}
	}, [variants])

	return (
		<div className="mb-4">
			{options?.map((field, index) => (
				(field.name !== "Title" && <OptionSelector key={index} field={field} />)
			))}
		</div>
	)
}

export default VariantSelector;