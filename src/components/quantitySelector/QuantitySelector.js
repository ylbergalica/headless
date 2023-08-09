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
			
			if (!isServerRequest) {
				props.updateValueState(prevQuantity => newQuantity); // If its not a server request, update the quantity state only on front
			}
		}

		if (isServerRequest) {
			clearTimeout(quantityTimeout.current); // If there exists a timout, clear it
			updateCartItemQuantity(props.lineItem, newQuantity); // Update the quantity immediately
		}
	}

	const styles = {
		selector: props.hasOwnProperty('lineItem') ? 'mb-3 w-fit flex items-center justify-start border border-zinc-300' : 'mb-10 w-fit flex items-center justify-start border border-zinc-300',
		quantity: props.hasOwnProperty('lineItem') ? 'text-base lg:text-xl py-1 lg:py-2 px-4 lg:px-7 m-0 order-2' : 'text-xl lg:text-3xl py-2 px-6 lg:px-8 order-2',
	}

	return (
		<div className={styles.selector + (props.forDrawer ? ' !mb-2' : '')}>
			<p className={styles.quantity + (props.forDrawer ? ' !py-1 !px-5' : '')} >{props.quantity}</p>
			<button 
				className={'quantity-btn border-r order-1' + (props.forDrawer ? ' !text-xs' : '')} 
				onClick={() => { updateQuantity(-1, props.isServerRequest) }} 
				disabled={isRequesting}
			><FontAwesomeIcon icon={faMinus} /></button>

			<button 
				className={'quantity-btn border-l order-3'  + (props.forDrawer ? ' !text-xs' : '')}
				onClick={() => { updateQuantity(+1, props.isServerRequest) }} 
				disabled={isRequesting}
				><FontAwesomeIcon icon={faPlus} /></button>
		</div>
	);
}

export default QuantitySelector;