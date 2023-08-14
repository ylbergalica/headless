import ShopifyBuy from "shopify-buy";

const shopifyToken = '47428bcff12a7527354091130ef7e362';

export const ShopifyClient = ShopifyBuy.buildClient({
	domain: "crashbuild-program-ylberi.myshopify.com",
	storefrontAccessToken: shopifyToken,
});
