import React, { useEffect, useState } from "react";

import QuantitySelector from "../quantitySelector/QuantitySelector";

const CartCard = (props) => {
	const [quantity, setQuantity] = useState(props.item.quantity);

	useEffect(() => {
		setQuantity(prevQuantity => props.item.quantity)
	}, [props.item.quantity])

	return (
		<div className='h-max w-full py-4 px-0 flex items-center justify-around flex-wrap border-t border-zinc-300'>
			<img className={'w-[15%] flex flex-[0_0_100px] lg:flex-[0_0_170px]' +' '+ (props.forDrawer ? 'styles.drawerCardImage' : '')} src={props.item.variant.image?.src} alt={props.item.variant.image?.altText} />

			<div className={'w-[50%] lg:min-w-0 lg:w-[30%] pl-2 flex flex-col items-start' +' '+ (props.forDrawer ? 'styles.drawerCardOptions' : '')}>
				<h2 className={'text-lg lg:text-2xl mb-1' +' '+ (props.forDrawer ? 'styles.drawerCardItemTitle' : '')} >{props.item.title}</h2>
				<QuantitySelector
					quantity={quantity} 
					updateValueState={setQuantity} 
					forDrawer={props.forDrawer}
					lineItem={props.item} 
					isServerRequest={true} 
					handleRequest={props.handleRequest} 
					isRequesting={props.isRequesting}
				/>
				<button 
					className={'text-xs lg:text-sm py-[.1rem] px-2 lg:py-2 lg:px-4 tracking-[.3rem] bg-transparent border border-zinc-300 transition-all ease-out duration-100 cursor-pointer hover:bg-red-100 hover:border-red-700 shadow-glow hover:shadow-red-300' +' '+ (props.forDrawer ? 'styles.drawerCardRemove' : '')} 
					onClick={() => {props.handleRequest(props.item, 0)} } 
					disabled={props.isRequesting}
				>REMOVE</button>
			</div>

			<div className={'w-[20%] flex justify-end' +' '+ (props.forDrawer ? 'styles.drawerCardPriceHolder' : '')}>
				<p className={'text-base lg:text-xl' +' '+ (props.forDrawer ? 'styles.drawerCardItemPrice' : '')}>${props.item.variant.price.amount}</p>
			</div>
		</div>
	)
}

export default CartCard;