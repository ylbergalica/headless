import React from "react";

// import * as styles from '../../styles/plp.mod.scss'
import ATCButton from "../atcButton/ATCButton";
import { Link } from "gatsby";

const ProductCard = (props) => {
	return (
		<div className='w-[90%] md:w-[40%] lg:w-[300px] h-[130px] lg:h-auto mx-0 lg:mx-4 my-4 flex flex-row lg:flex-col items-center justify-center lg:justify-between overflow-hidden border border-[#aaa] rounded-lg transition-all ease-in-out duration-200'>
			<Link to={props.product.handle} className='h-[130px] min-w-[130px] lg:h-[300px] cursor-pointer' >
				<img src={props.product.image} className='h-[130px] lg:h-[300px]' />
			</Link>
			<div className='w-[60%] h-full pl-4 lg:pl-0 lg:w-full lg:text-center flex flex-col items-start lg:items-center justify-end'>
				<Link to={props.product.handle} className='h-[45%] lg:h-20 text-[1.1rem] mb-2 lg:mb-0 lg:text-xl lg:p-2 text-black decoration-transparent hover:decoration-black hover:underline flex items-center justify-center' >
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