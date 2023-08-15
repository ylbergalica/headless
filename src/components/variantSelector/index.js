import React, { useContext, useEffect } from "react";

import { VariantContext } from "../../context/variant-context";

const VariantSelector = (props) => {
	const { currentVariant, setCurrentVariant } = useContext(VariantContext);

	useEffect(() => {
		setCurrentVariant(props.variants[0]);
	}, [props.variants])

	return (
		<div className="mb-6 flex">
			{props.variants.map((variant, index) => (
				<button 
					key={index} 
					className={'border border-zinc-300 px-4 mr-2 hover:bg-zinc-200 active:outline active:outline-2 active:outline-offset-[-2px] active:outline-zinc-400 ' + (currentVariant?.id === variant.id ? 'bg-zinc-200' : '')}
					onClick={() => setCurrentVariant(variant)} 
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}

export default VariantSelector;