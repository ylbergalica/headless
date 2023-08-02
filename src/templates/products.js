import * as React from "react";
import { useState, useEffect } from "react";
// import { getAllProducts } from "../data/product";
// import { Link } from "gatsby";

// import * as styles from '../styles/plp.mod.scss'

// import Nav from "../components/navbar/Nav";
// import CartDrawer from "../components/cartDrawer/CartDrawer";
import ProductCard from "../components/productCard/productCard";

const ProductsPage = ({ pageContext }) => {
    const [cart, setCart] = useState();

    const products = pageContext.data.map((product) => {
        return (
            <ProductCard key={product.handle} product={product} updateCart={setCart} />
			// <div>{product.title}</div>
        )
    })

    return <div>
        {/* <Nav />
        <CartDrawer isDrawer={true} cart={cart} setCart={setCart} />

        <div className={styles.plp}>
            <h1>Product List</h1>
            <div className={styles.productList}>
                {products}
            </div>
        </div> */}
		{products}
    </div>
}

export default ProductsPage;