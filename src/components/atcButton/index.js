import React, { useContext } from "react";

import { addCartItem } from "../../data/cart";
import { openCartDrawer } from "../cartDrawer/index";

import { CartContext } from "../../context/cart-context";

const ATCButton = (props) => {
	const { setCart, isRequesting, setIsRequesting } = useContext(CartContext);

	// If there is a style prop, add it to the button
	let baseStyle = 'h-12 lg:h-16 rounded-sm lg:rounded text-base lg:text-xl tracking-[.3rem]';
	if (props.style) {
		baseStyle = props.style;
	}

	const addToCart = async () => {
		setIsRequesting(true);
		if (props.variantID !== undefined && props.quantity !== undefined) {
			const newCart = await addCartItem(props.variantID, props.quantity);

			openCartDrawer();
			setCart(prevUpdate => newCart);
		}
		else console.log('Cannot add to cart: variantID or quantity is undefined');

		setIsRequesting(false);
	}

	return (
		<button
			className={baseStyle + ' atc-btn'}
			onClick={addToCart}
			disabled={isRequesting}
		>ADD TO CART</button>
	)
}

export default ATCButton;