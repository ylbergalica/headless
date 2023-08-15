import React, { useContext, useEffect, useState } from "react";

import ATCButton from "../atcButton/index";
import QuantitySelector from "../quantitySelector/index";
import Gallery from "../gallery/index";
import VariantSelector from "../variantSelector/index";
import Accordion from "../accordion/index";
import ProductFeature from "../productFeature/index";
import NotAvailableStamp from "../notAvailableStamp/index";

import { ItemContext } from "../../context/variant-context";

const ProductDisplay = ({ item }) => {
	const [quantityValue, setQuantityValue] = useState(1);
	const { currentItem, setCurrentItem, currentVariant } = useContext(ItemContext);

	const features = currentItem?.features?.map((feature, index) => {
		return (
			<ProductFeature 
				key={index} 
				title={feature.title} 
				content={feature.content} />
		)
	})

	useEffect(() => {
		setCurrentItem(item);
	}, [item])

	return (
		<div className='w-full m-0 flex flex-col lg:flex-row items-start justify-start'>
			<Gallery />

			<div className='w-full lg:w-1/2 py-4 lg:py-0 px-6 lg:px-12 order-3 overflow-y-auto'>
				<h2 className='text-2xl lg:text-[2.4rem] lg:leading-[3rem] mb-7'>{currentItem?.title}</h2>
				<VariantSelector options={currentItem?.options} variants={currentItem?.variants} />
				<h1 className='text-[1.6rem] lg:text-5xl mb-4'>${currentVariant?.price}</h1>
				{currentItem?.features && <Accordion title='What we guarantee'>
					{features}
				</Accordion>}

				<hr className="border-zinc-500" />

				<div className="relative">
					<NotAvailableStamp display={(!currentVariant?.available ? 'flex' : 'hidden')} />

					<p className="text-base lg:text-xl tracking-[.2rem] mt-7 mb-[.9rem]" id="quantity-title">QUANTITY</p>
					<QuantitySelector quantity={quantityValue} updateValueState={setQuantityValue} isServerRequest={false} />

					<div>
						<ATCButton variantID={currentVariant?.id} quantity={quantityValue} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDisplay;