import React from "react";

const VariantSelector = (props) => {
	return (
		<div>
			{props.variants.map((variant, index) => (
				<button 
					key={index} 
					className='variant-selector-button' 
					// onClick={() => props.onClick(variant.id)} 
					style={props.selectedVariant === variant.id ? {backgroundColor: 'black'} : null}
				>
					{variant.title}
				</button>
			))}
		</div>
	)
}

export default VariantSelector;