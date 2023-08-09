import React from "react";

import Nav from "../components/navbar/Nav";
import CartDrawer from "../components/cartDrawer/CartDrawer";

import { CartProvider } from "../context/cart-context";
import ProductDisplay from "../components/productDisplay/ProductDisplay";

const ProductTemplate = ({ pageContext }) => {
	console.log(pageContext, " Product Template");
	const item = pageContext;

	return (
		<CartProvider>
			<Nav />
			<CartDrawer />

			<div className='mt-24 lg:h-[70vh] flex items-center lg:justify-center'>
				<ProductDisplay item={item} />
			</div>
		</CartProvider>
	);
}

export default ProductTemplate;