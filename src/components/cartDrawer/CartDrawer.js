import React, { useRef } from "react";

import Cart from "../cart/Cart";
import CartTotal from "../cart/CartTotal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { CartProvider } from "../../context/cart-context";

export const openCartDrawer = () => {
	const drawer = document.getElementById('cart-drawer');
	drawer.style.transform = "translateX(0%)";
}

const CartDrawer = (props) => {
	const cartDrawer = useRef();

	const closeCartDrawer = () => {
		cartDrawer.current.style.transform = "translateX(100%)";
	}

	return (
		<CartProvider>
			<div className={'w-[90%] md:w-[400px] h-full fixed top-0 right-0 z-50 flex flex-col bg-white border-l border-nightsky-500 transition-all ease-out duration-300 translate-x-full'} ref={cartDrawer} id="cart-drawer" >
				<div className={'h-[15%] p-6 flex items-center justify-between border-b border-zinc-300'}>
					<FontAwesomeIcon
						icon={faXmark}
						className={'w-[10%] flex items-center justify-center text-2xl border border-transparent rounded-full transition-all ease-out duration-200 cursor-pointer hover:border-zinc-300'}
						onClick={() => { closeCartDrawer() }} />
					<h2 className="m-0 text-3xl px-4">Cart</h2>
				</div>

				<Cart isDrawer={true} />
				<CartTotal forDrawer={true} />
			</div>
		</CartProvider>
	)
}

export default CartDrawer;