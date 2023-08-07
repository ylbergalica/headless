import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const QuantitySelector = (props) => {
	// A simple variable did not work here, a ref hook was needed to avoid any possible duplicating?
	const quantityTimeout = useRef();

	const updateQuantity = (number, isServerRequest) => {
		let newQuantity;
		// Change the front value
		if (!(!isServerRequest && (props.quantity === 1 && number === -1))) {
			newQuantity = props.quantity + number;
			console.log("tryina update quantity to " + newQuantity);
			// props.updateValueState(prevQuantity => newQuantity);
		}

		if (isServerRequest) {
			clearTimeout(quantityTimeout.current); // If there exists a timout, clear it
			// quantityTimeout.current = setTimeout(() => { props.handleRequest(props.lineItem, newQuantity) }, 1000); // Update the quantity after 1 second, leaving room for the user to change quantity efficiently
		}
	}

	const styles = {
		selector: props.hasOwnProperty('lineItem') ? 'mb-3 w-fit flex items-center justify-start border border-zinc-300' : 'pageStyles.quantitySelector',
		quantity: props.hasOwnProperty('lineItem') ? 'text-base lg:text-xl py-1 lg:py-3 px-4 lg:px-7 m-0 order-2' : 'pageStyles.quantityValue',
		minusButton: props.hasOwnProperty('lineItem') ? 'self-stretch px-2 lg:text-sm bg-transparent cursor-pointer hover:bg-gray-400 text-[.7rem] border-r border-zinc-300 order-1' : 'pageStyles.quantityMinusBtn',
		plusButton: props.hasOwnProperty('lineItem') ? 'self-stretch px-2 lg:text-sm bg-transparent cursor-pointer hover:bg-gray-400 text-[.7rem] border-l border-zinc-300 order-3' : 'pageStyles.quantityPlusBtn'
	}

	return (
		<div className={styles.selector +' '+ (props.forDrawer ? 'cardStyles.drawerCardQuantitySelector' : '')}>
			<p className={styles.quantity +' '+ (props.forDrawer ? 'cardStyles.drawerCardQuantityValue' : '')} >{props.quantity}</p>
			<button 
				className={styles.minusButton} 
				onClick={() => { updateQuantity(-1, props.isServerRequest) }} 
				disabled={props.isRequesting}
			><FontAwesomeIcon icon={faMinus} /></button>

			<button 
				className={styles.plusButton}
				onClick={() => { updateQuantity(+1, props.isServerRequest) }} 
				disabled={props.isRequesting}
				><FontAwesomeIcon icon={faPlus} /></button>
		</div>
	);
}

export default QuantitySelector;