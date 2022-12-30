import React from 'react';
import ProductItem from "../components/ProductItem";
import '../styles/ProductList.scss';
import {useGetProducts} from "../hooks/useGetProducts";

const ProductList = () => {
    const products = useGetProducts();
    return (
        <section className="main-container">
            <div className="ProductList">
                {
                    products.map(item => (
                        <ProductItem
                            key={item.id}
                            product={item}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default ProductList;