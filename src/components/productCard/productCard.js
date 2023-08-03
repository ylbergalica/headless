import React from "react";

// import * as styles from '../../styles/plp.mod.scss'
import ATCButton from "../atcButton/ATCButton";
import { Link } from "gatsby";

const ProductCard = (props) => {
	return (
		<div className='product-card'>
			<Link to={props.product.handle} className='h-[130px] min-w-[130px] lg:h-[300px] cursor-pointer' >
				<img src={props.product.image} className='h-[130px] lg:h-[300px]' />
			</Link>
			<div className='product-card-info'>
				<Link to={props.product.handle} className='product-card-title' >
					{props.product.title}
				</Link>
				<p className='text-lg h-[25%] p-0 mb-0 lg:mb-4' >${props.product.variant.price}</p>
				<div className='h-[30%] w-full p-0 lg:px-12 lg:pb-2'>
					<ATCButton 
						style='h-6 lg:h-10 rounded-sm lg:rounded text-sm tracking-normal' 
						variantID={props.product.variant.id} 
						quantity={1}
						// updateCart={props.updateCart} 
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;