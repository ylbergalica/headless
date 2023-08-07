// CartContext.js
import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	// State to hold the product details
	const [cart, setCart] = useState({});

	useEffect(() => {
		console.log(cart);
	}, [cart])

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };