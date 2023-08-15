import React from "react";
import { Link } from "gatsby";

import ATCButton from "../atcButton/index";
import NotAvailableStamp from "../notAvailableStamp/index";

const ProductCard = ({ product }) => {
	let variant = product.variants[0];
	let isAvailable = false;
	for(let variantIndex = 0; variantIndex < product.variants.length; variantIndex++) {
		if (product.variants[variantIndex].available) {
			variant = product.variants[variantIndex];
			isAvailable = true;
			break;
		}
	}

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
				<p className='text-lg p-0 mb-0 lg:mb-4' >${variant.price}</p>
				<div className='w-full p-0 lg:px-12 lg:pb-2'>
					<ATCButton 
						style='h-6 lg:h-10 rounded-sm lg:rounded text-sm tracking-normal' 
						variantID={variant.id} 
						quantity={1}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;