import React from "react";

const ProductFeature = ({ title, content }) => {
	return (
		<div className="my-2">
			<h1 className="font-semibold">{title}</h1>
			<p>{content}</p>
		</div>
	)
}

export default ProductFeature;