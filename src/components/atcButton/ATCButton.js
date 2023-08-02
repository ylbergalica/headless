import React, { useState } from "react";

// import * as atcStyles from "../../styles/atc.mod.scss"

// import { addCartItem } from "../../data/cart";
// import { openCartDrawer } from "../cartDrawer/CartDrawer";

const ATCButton = (props) => {
	const [isDisabled, setIsDisabled] = useState(false);

	const addToCart = async () => {
		// setIsDisabled(true);
		// const newCart = await addCartItem(props.variantID, props.quantity);

		// openCartDrawer();
		// props.updateCart(prevUpdate => newCart);

		// setIsDisabled(false);
		console.log('add to cart');
	}

	return (
		<button
			className = {atcStyles.toCartBtn +' '+ props.style} 
			onClick = {addToCart} 
			disabled = {isDisabled} 
		>ADD TO CART</button>
	)
}

export default ATCButton;