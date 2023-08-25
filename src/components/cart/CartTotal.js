import React, { useContext } from "react";

import { CartContext } from "../../context/cart-context";

const CartTotal = (props) => {
	const { cart } = useContext(CartContext);

	return (
		<div className={'p-8 flex justify-center items-center flex-wrap text-center bg-white' + (props.forDrawer ? ' !p-4 border-t border-zinc-300' : '')}>
			<h3 className={'w-[50%] text-xl lg:text-3xl tracking-[.1rem] mb-0' + (props.forDrawer ? ' lg:!text-2xl' : '')}>Total</h3>
			<p className={'w-[50%] text-xl lg:text-3xl font-semibold mb-0' + (props.forDrawer ? ' lg:!text-2xl' : '')} >${cart.totalPrice?.amount}</p>
			<div className={'w-full flex justify-center lg:mt-4'}>
				<a href={cart.webUrl} target="_blank" className="w-full lg:w-[90%]">
					<button className={'checkout-btn'} disabled={(cart.lineItems?.length > 0 ? false : true)} >
						CHECK OUT
					</button>
				</a>
			</div>
		</div>
	)
}

export default CartTotal;