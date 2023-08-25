import React, { useEffect, useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSadTear } from '@fortawesome/free-regular-svg-icons';

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
			{cart.lineItems?.length === 0 && (
				<div className="p-12 flex flex-col items-center justify-center text-xl text-center">
					<p className="mb-4">Looks like you don't have any items in your cart yet! <FontAwesomeIcon icon={faSadTear} /></p>
					<p>Browse our finest <a href="/products" className="underline text-nightsky-550 hover:text-nightsky-750">products</a> to get started. <FontAwesomeIcon icon={faCheck} className="text-lime-600" /></p>
				</div>
			)}
		</div>
	)
}

export default Cart;