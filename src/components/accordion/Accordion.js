import React from "react";

const Accordion = ({ title, children }) => {
	return (
		<div>
			<h1>{title}</h1>
			{children}
		</div>
	)
}

export default Accordion;