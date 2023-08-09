import React, { useContext, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context/cart-context";

const QuantitySelector = (props) => {
	const { updateCartItemQuantity, isRequesting } = useContext(CartContext);
	const quantityTimeout = useRef(); // A simple variable did not work here, a ref hook was needed to avoid any possible duplicating?

	const updateQuantity = (number, isServerRequest) => {
		let newQuantity;
		// Change the front value
		if (!(!isServerRequest && (props.quantity === 1 && number === -1))) { // If the quantity is 1 and the user is trying to decrease the quantity (and its not a server request), do not allow it
			newQuantity = props.quantity + number;
			// props.updateValueState(prevQuantity => newQuantity);
		}

		if (isServerRequest) {
			clearTimeout(quantityTimeout.current); // If there exists a timout, clear it
			updateCartItemQuantity(props.lineItem, newQuantity); // Update the quantity immediately
		}
	}

	const styles = {
		selector: props.hasOwnProperty('lineItem') ? 'mb-3 w-fit flex items-center justify-start border border-zinc-300' : 'pageStyles.quantitySelector',
		quantity: props.hasOwnProperty('lineItem') ? 'text-base lg:text-xl py-1 lg:py-3 px-4 lg:px-7 m-0 order-2' : 'pageStyles.quantityValue',
		minusButton: props.hasOwnProperty('lineItem') ? 'self-stretch px-2 lg:text-sm bg-transparent cursor-pointer hover:bg-gray-400 text-[.7rem] disabled:text-zinc-400 disabled:cursor-not-allowed disabled:hover:bg-transparent border-r border-zinc-300 order-1' : 'pageStyles.quantityMinusBtn',
		plusButton: props.hasOwnProperty('lineItem') ? 'self-stretch px-2 lg:text-sm bg-transparent cursor-pointer hover:bg-gray-400 text-[.7rem] disabled:text-zinc-400 disabled:cursor-not-allowed disabled:hover:bg-transparent border-l border-zinc-300 order-3' : 'pageStyles.quantityPlusBtn'
	}

	return (
		<div className={styles.selector + (props.forDrawer ? ' !mb-2' : '')}>
			<p className={styles.quantity + (props.forDrawer ? ' !py-1 !px-5' : '')} >{props.quantity}</p>
			<button 
				className={styles.minusButton + (props.forDrawer ? ' !text-xs' : '')} 
				onClick={() => { updateQuantity(-1, props.isServerRequest) }} 
				disabled={isRequesting}
			><FontAwesomeIcon icon={faMinus} /></button>

			<button 
				className={styles.plusButton  + (props.forDrawer ? ' !text-xs' : '')}
				onClick={() => { updateQuantity(+1, props.isServerRequest) }} 
				disabled={isRequesting}
				><FontAwesomeIcon icon={faPlus} /></button>
		</div>
	);
}

export default QuantitySelector;