import React from 'react';
import ProductItem from "../components/ProductItem";
import '../styles/ProductList.scss';
import {AppContext} from "../context/AppContext";

const ProductList = () => {

    const {state} = React.useContext(AppContext);

    return (
        <section className="main-container">
            <div className="ProductList">
                {
                    state.copyProducts.map(item => (
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