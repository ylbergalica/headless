import * as React from "react";

import Nav from "../components/navbar/Nav";
import ProductList from "../components/productList/index";
import CartDrawer from "../components/cartDrawer/index";

import { CartProvider } from "../context/cart-context";

const ProductsPage = ({ pageContext }) => {
	return (
		<CartProvider>
			<Nav />
			<CartDrawer />

			<ProductList productList={pageContext.data} />
		</CartProvider>
	)
}

export default ProductsPage;