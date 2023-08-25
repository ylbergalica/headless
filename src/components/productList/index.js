import * as React from "react";

import ProductCard from "../productCard/index";

const ProductList = ({ productList }) => {
	const activeProducts = productList.filter((product) => {
		return product.status === 'active';
	})

	const products = activeProducts.map((product) => {
		return (
			<ProductCard key={product.handle} product={product} />
		)
	})

	return (
		<div className='lg:mt-11 lg:p-8'>
			<h1 className='m-8 mb-4 text-2xl'>Product List</h1>
			<div className='flex flex-wrap justify-evenly lg:justify-center'>
				{products}
			</div>
		</div>
	)
}

export default ProductList;