import * as React from "react";

import Nav from "/components/navbar/Nav.js";
import ProudctList from "/components/productList/ProductList.js";
import CartDrawer from "/components/cartDrawer/CartDrawer.js";

import { CartProvider } from "../context/cart-context.js";

const ProductsPage = ({ pageContext }) => {
	return (
		<CartProvider>
			<Nav />
			<CartDrawer />

			<ProudctList productList={pageContext.data} />
		</CartProvider>
	)
}

export default ProductsPage;