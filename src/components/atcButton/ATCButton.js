import React, { useState } from "react";

// import * as atcStyles from "../../styles/atc.mod.scss"

import { addCartItem } from "../../data/cart";
// import { openCartDrawer } from "../cartDrawer/CartDrawer";

const ATCButton = (props) => {
	const [isDisabled, setIsDisabled] = useState(false);
	
	// If there is a style prop, add it to the button
	let baseStyle = 'h-16 rounded-sm lg:rounded text-base lg:text-xl tracking-[.3rem]';
	if (props.style) {
		baseStyle = props.style;
	}

	const addToCart = async () => {
		setIsDisabled(true);
		const newCart = await addCartItem(props.variantID, props.quantity);

		// openCartDrawer();
		props.updateCart(prevUpdate => newCart);

		setIsDisabled(false);
		console.log('add to cart');
	}

	return (
		<button
			className = {baseStyle + ' atc-btn'} 
			onClick = {addToCart} 
			disabled = {isDisabled} 
		>ADD TO CART</button>
	)
}

export default ATCButton;