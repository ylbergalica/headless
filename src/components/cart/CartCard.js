import React, { useContext, useEffect, useState } from "react";

import QuantitySelector from "../quantitySelector/index";

import { CartContext } from "../../context/cart-context";

const CartCard = (props) => {
	const [quantity, setQuantity] = useState(props.item.quantity);
	const { updateCartItemQuantity } = useContext(CartContext);

	useEffect(() => {
		setQuantity(prevQuantity => props.item.quantity)
	}, [props.item.quantity]) // Update the quantity when the quantity prop changes in case the server update was not successful

	return (
		<div className='h-max w-full py-4 px-0 flex items-center justify-around flex-wrap border-t border-zinc-300'>
			<img className={'w-[15%] flex flex-[0_0_100px] lg:flex-[0_0_170px] rounded-md ' + (props.forDrawer ? '!w-[30%] !flex-none' : '')} src={props.item.variant.image?.src} alt={props.item.variant.image?.altText} />

			<div className={'w-[50%] lg:min-w-0 pl-2 flex flex-col items-start ' + (props.forDrawer ? '!w-[45%]' : '')}>
				<h2 className={'text-lg lg:text-2xl mb-1 ' + (props.forDrawer ? '!text-lg' : '')} >{props.item.title}</h2>
				<QuantitySelector
					quantity={quantity} 
					forDrawer={props.forDrawer}
					lineItem={props.item} 
					isServerRequest={true} 
				/>
				<button 
					className={'text-xs lg:text-sm py-[.1rem] px-2 lg:py-2 lg:px-4 tracking-[.3rem] bg-transparent border border-zinc-300 transition-all ease-out duration-100 cursor-pointer hover:bg-red-100 hover:border-red-700 shadow-glow hover:shadow-red-300 ' + (props.forDrawer ? '!text-xs !py-1 !px-2' : '')} 
					onClick={() => {updateCartItemQuantity(props.item, 0)} } 
					disabled={props.isRequesting}
				>REMOVE</button> 
			</div>

			<div className={'w-max flex justify-end ' + (props.forDrawer ? '' : '')}>
				<p className={'text-base lg:text-xl ' + (props.forDrawer ? 'lg:!text-[1.1rem]' : '')}>${props.item.variant.price.amount}</p>
			</div>
		</div>
	)
}

export default CartCard;