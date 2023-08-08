import * as React from "react";

import ProductCard from "../productCard/productCard";

const ProudctList = ({ productList }) => {
	const products = productList.map((product) => {
		return (
			<ProductCard key={product.handle} product={product} />
		)
	})

	return (
		<div>
			<div className='p-8'>
				<h1 className='m-8 mb-4 text-2xl'>Product List</h1>
				<div className='flex flex-wrap justify-evenly lg:justify-center'>
					{products}
				</div>
			</div>
		</div>
	)
}

export default ProudctList;