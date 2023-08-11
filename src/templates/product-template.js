import React from "react";

import Nav from "../components/navbar/Nav";
import CartDrawer from "../components/cartDrawer/CartDrawer";
import ProductDisplay from "../components/productDisplay/ProductDisplay";

import { CartProvider } from "../context/cart-context";
import { VariantProvider } from "../context/variant-context";

const ProductTemplate = ({ pageContext }) => {
	const item = pageContext;

	return (
		<CartProvider>
			<Nav />
			<CartDrawer />

			<VariantProvider>
				<div className='mt-24 lg:h-[70vh] flex items-center lg:justify-center'>
					<ProductDisplay item={item} />
				</div>
			</VariantProvider>
		</CartProvider>
	);
}

export default ProductTemplate;