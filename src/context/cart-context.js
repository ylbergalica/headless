import React, { createContext, useEffect, useState } from 'react';

import { updateCartItem } from '../data/cart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState({});
	const [isRequesting, setIsRequesting] = useState(false);

	const updateCartItemQuantity = (item, quantity) => {
		setIsRequesting(prevRequest => true); // Prevent the user from clicking the button multiple times
		updateCartItem(item.id, quantity) // Make the request to Shopify
			.then((updatedCart) => {
				setCart(prevCart => updatedCart);
				setIsRequesting(prevRequest => false);
			})
	}

	return (
		<CartContext.Provider value={{ 
			cart, 
			setCart, 
			updateCartItemQuantity, 
			isRequesting, 
			setIsRequesting 
		}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };