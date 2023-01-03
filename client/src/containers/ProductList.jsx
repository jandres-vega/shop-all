import React from 'react';
import ProductItem from "../components/ProductItem";
import '../styles/ProductList.scss';
import {useGetProducts} from "../hooks/useGetProducts";
import {AppContext} from "../context/AppContext";

const ProductList = () => {
    //const products = useGetProducts();
    const {state} = React.useContext(AppContext);

    return (
        <section className="main-container">
            <div className="ProductList">
                {
                    state.products.map(item => (
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