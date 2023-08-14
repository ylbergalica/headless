import React from "react";

import Nav from "../components/navbar/Nav.js";
import CartDrawer from "../components/cartDrawer/CartDrawer.js";
import ProductDisplay from "../components/productDisplay/ProductDisplay.js";

import { CartProvider } from "../context/cart-context.js";
import { VariantProvider } from "../context/variant-context.js";

const ProductTemplate = ({ pageContext }) => {
	const item = pageContext;

	return (
		<CartProvider>
			<Nav />
			<CartDrawer />

			<VariantProvider>
				<div className='mt-16 lg:mt-32 lg:h-[70vh] flex items-start lg:justify-center'>
					<ProductDisplay item={item} />
				</div>
			</VariantProvider>
		</CartProvider>
	);
}

export default ProductTemplate;