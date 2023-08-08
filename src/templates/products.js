import * as React from "react";
import { useState, useEffect, useContext } from "react";

import ProductCard from "../components/productCard/productCard";
import Nav from "../components/navbar/Nav";
import { CartContext, CartProvider } from "../context/cart-context";
import ProudctList from "../components/productList/productList";
import CartDrawer from "../components/cartDrawer/CartDrawer";

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