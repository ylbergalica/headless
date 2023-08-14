import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(true);

	const arrowStyle = isOpen ? "transform rotate-180" : "";
	const contentDisplay = isOpen ? "flex" : "hidden";

	const toggleAccordion = () => {
		setIsOpen(prevOpen => !prevOpen);
	}

	return (
		<div className="w-full flex flex-col">
			<div className="px-2 py-4 flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
				<h1 className="text-xl text-nightsky-500">{title}</h1>
				<FontAwesomeIcon icon={faChevronDown} className={"text-lg transition-all ease-out duration-200 " + arrowStyle} />
			</div>

			<div className={contentDisplay + " flex-col"}>
				{children}
			</div>
		</div>
	)
}

export default Accordion;