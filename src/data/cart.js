import { ShopifyClient } from "./helpers";

export const getExistingCheckoutId = () => localStorage.getItem("cartID");

export const getCheckoutId = async () => {
    const checkoutId = getExistingCheckoutId();
    if (checkoutId && await ShopifyClient.checkout.fetch(checkoutId)) {
        localStorage.setItem("cartID", checkoutId);
        return checkoutId;
    }

    const newCheckout = await ShopifyClient.checkout.create();
    localStorage.setItem("cartID", newCheckout.id);

    return newCheckout.id;
};

export const getCart = (checkoutId) => {
	debugger
	// console.log(ShopifyClient.storefrontAccessToken, " EL Token");
    return ShopifyClient.checkout.fetch(checkoutId);
}

// Add to Cart
export const addCartItem = async (variantId, quantity) => {
    const lineItem = [
        {
            variantId: variantId,
            quantity: quantity,
        }
    ];

    const updatedCheckout = await ShopifyClient.checkout.addLineItems(await getCheckoutId(), lineItem);
    return updatedCheckout;
};

// Update Cart Item
export const updateCartItem = async (itemId, qty) => {
    const lineItem = [{
        id: itemId,
        quantity: qty
    }];

    const updatedCheckout = await ShopifyClient.checkout.updateLineItems(await getCheckoutId(), lineItem);
    return updatedCheckout;
};

// Remove Cart Item
export const removeCartItems = async (lineItemIds) => {
    const updatedCheckout = await ShopifyClient.checkout.removeLineItems(await getCheckoutId(), lineItemIds);
    return updatedCheckout;
};
