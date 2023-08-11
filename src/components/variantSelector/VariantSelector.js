import React from "react";

const VariantSelector = (props) => {
	console.log(props.variants);

	return (
		<div className="mb-6 flex">
			{props.variants.map((variant, index) => (
				<button 
					key={index} 
					className={'border border-zinc-300 px-4 mr-2 hover:bg-zinc-200 ' + (props.selectedVariant === variant.id ? 'bg-zinc-200' : '')}
					// onClick={() => props.onClick(variant.id)} 
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}

export default VariantSelector;