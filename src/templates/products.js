import * as React from "react";

import Nav from "../components/navbar/Nav";
import ProudctList from "../components/productList/ProductList";
import CartDrawer from "../components/cartDrawer/CartDrawer";

import { CartProvider } from "../context/cart-context";

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