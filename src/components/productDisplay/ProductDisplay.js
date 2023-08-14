import React, { useState } from "react";

import ATCButton from "../atcButton/ATCButton";
import QuantitySelector from "../quantitySelector/QuantitySelector";
import Gallery from "../gallery/Gallery";
import VariantSelector from "../variantSelector/VariantSelector";
import Accordion from "../accordion/Accordion";
import ProductFeature from "../productFeature/ProductFeature";

const ProductDisplay = ({ item }) => {
	const [quantityValue, setQuantityValue] = useState(1);

	const features = item.features?.map((feature, index) => {
		return (
			<ProductFeature 
				key={index} 
				title={feature.title} 
				content={feature.content} />
		)
	})

	return (
		<div className='w-full m-0 flex flex-col lg:flex-row items-center justify-center'>
			<Gallery product={item} />

			<div className='max-h-[30rem] w-full lg:w-1/2 py-4 px-6 lg:px-12 order-3'>
				<h2 className='text-2xl lg:text-[2.4rem] lg:leading-[3rem] mb-7'>{item.title}</h2>
				<VariantSelector variants={item.variants} />
				<h1 className='text-[1.6rem] lg:text-5xl mb-4'>${item.variants[0].price}</h1>
				<Accordion title='What we guarantee'>
					{features}
				</Accordion>

				<hr className="border-zinc-500" />

				<p className="text-base lg:text-xl tracking-[.2rem] mt-7 mb-[.9rem]" id="quantity-title">QUANTITY</p>
				<QuantitySelector quantity={quantityValue} updateValueState={setQuantityValue} isServerRequest={false} />

				<div>
					<ATCButton variantID={item.variants[0].id} quantity={quantityValue} />
				</div>
			</div>
		</div>
	)
}

export default ProductDisplay;