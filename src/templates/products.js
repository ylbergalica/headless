import * as React from "react";
import { useState, useEffect } from "react";
// import { getAllProducts } from "../data/product";
// import { Link } from "gatsby";

// import * as styles from '../styles/plp.mod.scss'

// import Nav from "../components/navbar/Nav";
// import CartDrawer from "../components/cartDrawer/CartDrawer";
import ProductCard from "../components/productCard/productCard";
import Nav from "../components/navbar/Nav";

const ProductsPage = ({ pageContext }) => {
    const [cart, setCart] = useState();

    const products = pageContext.data.map((product) => {
        return (
            <ProductCard key={product.handle} product={product} updateCart={setCart} />
            // <div>{product.title}</div>
        )
    })

    return <div>
        {/*
        <CartDrawer isDrawer={true} cart={cart} setCart={setCart} />
        */}

        <Nav />
        <div className='p-8'>
            <h1 className='m-8 mb-4 text-2xl'>Product List</h1>
            <div className='flex flex-wrap justify-evenly lg:justify-center'>
                {products}
            </div>
        </div>
    </div>
}

export default ProductsPage;