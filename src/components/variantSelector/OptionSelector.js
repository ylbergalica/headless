import React, { useContext } from "react";

import { ItemContext } from "../../context/variant-context";

const OptionSelector = ({ field }) => {
	const { currentVariant, setCurrentVariant, setCurrentOptions } = useContext(ItemContext);

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
						className={'border border-zinc-300 px-4 mr-2 hover:bg-zinc-200 active:outline active:outline-2 active:outline-offset-[-2px] active:outline-zinc-400 ' + (currentVariant?.title.includes(option) ? 'bg-zinc-200' : '')}
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