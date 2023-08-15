import React, { useContext } from "react";
import { Link } from "gatsby";

import ATCButton from "../atcButton/index";
import NotAvailableStamp from "../notAvailableStamp/index";

import { VariantContext } from "../../context/variant-context";

const ProductCard = ({ product }) => {
	const { currentVariant } = useContext(VariantContext);

	let isAvailable = false;
	product.variants.forEach(variant => {
		if (variant.available) {
			isAvailable = true;
		}
	});

	return (
		<div className='product-card relative'>
			<NotAvailableStamp display={(!isAvailable ? 'flex' : 'hidden')} />

			<Link to={product.handle} className='h-[130px] min-w-[130px] lg:h-[300px] cursor-pointer' >
				<img src={product.image} className='h-[130px] lg:h-[300px]' />
			</Link>
			<div className='product-card-info'>
				<Link to={product.handle} className='product-card-title' >
					{product.title}
				</Link>
				<p className='text-lg h-[25%] p-0 mb-0 lg:mb-4' >${product.variants[0].price}</p>
				<div className='h-[30%] w-full p-0 lg:px-12 lg:pb-2'>
					<ATCButton 
						style='h-6 lg:h-10 rounded-sm lg:rounded text-sm tracking-normal' 
						variantID={currentVariant?.id} 
						quantity={1}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;