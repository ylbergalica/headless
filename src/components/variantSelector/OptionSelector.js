import React, { useContext } from "react";

import { ItemContext } from "../../context/product-context";

const OptionSelector = ({ field }) => {
	const { currentVariant, setCurrentOptions } = useContext(ItemContext);

	console.log(currentVariant?.title);

	const updateOption = (option) => {
		setCurrentOptions(prevOptions => {
			return {
				...prevOptions,
				[field.name]: option
			}
		})
	}

	return (
		<div className="mb-2 pb-2 flex flex-col overflow-x-auto">
			<h2>{field.name}</h2>
			
			<div className="flex flex-row">
				{field.values.map((option, index) => (
					<button 
						key={index} 
						className={'border border-nightsky-700 rounded py-1 px-4 mr-2 hover:outline hover:outline-2 hover:outline-offset-[-3px] hover:outline-nightsky-500 ' + (currentVariant?.title.includes(option) ? '!bg-nightsky-500 text-slate-50' : '')}
						onClick={() => updateOption(option)} 
					>
						{option}
					</button>
				))}
			</div>
		</div>
	)
}

export default OptionSelector;