import React from "react";
import { useState } from "react";

import Nav from "../components/navbar/Nav";
import Cart from "../components/cart/Cart";
import CartTotal from "../components/cart/CartTotal";

import { CartProvider } from "../context/cart-context";

const CartPage = () => {
    return (
        <CartProvider>
            <Nav />
			
            <div className='m-auto lg:max-w-[70%] mt-16 lg:mt-24' >
                <Cart />
                <CartTotal />
            </div>
        </CartProvider>
    )
}

export default CartPage;