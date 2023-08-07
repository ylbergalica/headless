import React, { useEffect, useState, useContext } from "react";

import { updateCartItem, getCheckoutId, getCart, getExistingCheckoutId } from '../../data/cart';

import CartCard from "./CartCard";

import { CartContext } from "../../context/cart-context";

const Cart = (props) => {
	const [isRequesting, setIsRequesting] = useState(false);
	const { cart, setCart } = useContext(CartContext);

	const updateCartItemQuantity = (item, quantity) => {
		updateCartItem(item.id, quantity)
			.then((updatedCart) => {
				setCart(prevCart => updatedCart);
				setIsRequesting(prevRequest => false);
			})
	}

	const requestUpdateQuantity = (item, quantity) => {
		setIsRequesting(prevRequest => true);
		updateCartItemQuantity(item, quantity);
	}

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

	console.log(cart)

	const itemCards = cart.lineItems?.map((item, index) => {
		return (
			<CartCard
				key={index}
				item={item}
				forDrawer={props.isDrawer}
				handleRequest={requestUpdateQuantity}
				isRequesting={isRequesting}
			/>
		)
	})

	return (
		<div className={'px-6 max-h-[68%]' + ' ' + "(props.isDrawer ? styles.drawerContainer : '')"} >
			{itemCards}
		</div>
	)
}

export default Cart;