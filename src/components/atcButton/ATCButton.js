import React, { useState, useContext } from "react";

import { addCartItem } from "../../data/cart";
import { CartContext } from "../../context/cart-context";
// import { openCartDrawer } from "../cartDrawer/CartDrawer";

const ATCButton = (props) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const { setCart } = useContext(CartContext);

	// If there is a style prop, add it to the button
	let baseStyle = 'h-16 rounded-sm lg:rounded text-base lg:text-xl tracking-[.3rem]';
	if (props.style) {
		baseStyle = props.style;
	}

	const addToCart = async () => {
		setIsDisabled(true);
		const newCart = await addCartItem(props.variantID, props.quantity);

		// openCartDrawer();
		setCart(prevUpdate => newCart);

		setIsDisabled(false);
		console.log('add to cart');
	}

	return (
		<button
			className={baseStyle + ' atc-btn'}
			onClick={addToCart}
			disabled={isDisabled}
		>ADD TO CART</button>
	)
}

export default ATCButton;