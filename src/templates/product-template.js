import React from "react";

import Nav from "../components/navbar/Nav";
import CartDrawer from "../components/cartDrawer/index";
import ProductDisplay from "../components/productDisplay/index";

import { CartProvider } from "../context/cart-context";
import { ItemProvider } from "../context/variant-context";

const ProductTemplate = ({ pageContext }) => {
	const item = pageContext;

	return (
		<CartProvider>
			<Nav />
			<CartDrawer />

			<ItemProvider>
				<div className='mt-16 lg:mt-32 lg:h-[70vh] flex items-start lg:justify-center'>
					<ProductDisplay item={item} />
				</div>
			</ItemProvider>
		</CartProvider>
	);
}

export default ProductTemplate;