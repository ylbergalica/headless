import React, { useEffect, useContext } from "react";

import { getCheckoutId, getCart, getExistingCheckoutId } from '../../data/cart';

import CartCard from "./CartCard";

import { CartContext } from "../../context/cart-context";

const Cart = (props) => {
	const { cart, setCart  } = useContext(CartContext);

	const fetchCart = async () => {
		let cartID = getExistingCheckoutId();
		if (!cartID) {
			cartID = await getCheckoutId();
		}

		getCart(cartID).then((result) => {
			setCart(result);
		})
	}

	useEffect(() => {
		fetchCart();
	}, [])

	const itemCards = cart.lineItems?.map((item, index) => {
		return (
			<CartCard
				key={index}
				item={item}
				forDrawer={props.isDrawer}
			/>
		)
	})

	return (
		<div className={'px-6 max-h-[68%] ' + (props.isDrawer ? 'overflow-y-auto drawer-scrollbar' : '')} >
			{itemCards}
		</div>
	)
}

export default Cart;