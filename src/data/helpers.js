import ShopifyBuy from "shopify-buy";

export const ShopifyClient = ShopifyBuy.buildClient({
	domain: process.env.GATSBY_STORE_DOMAIN,
	storefrontAccessToken: process.env.GATSBY_API_TOKEN,
});