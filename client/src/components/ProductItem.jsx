import React from 'react';
import '../styles/ProductItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../context/AppContext";

const ProductItem = ({product}) => {

    const {addToCart} = React.useContext(AppContext)

    const handleCart = (item) => {
        addToCart(item)
    }

    return (
        <div className="ProductItem">
            <img src={product.image} alt={product.name_product} />
            <div className="product-info">
                <div className="container-title-card">
                    <p>{`$${product.price}`}</p>
                    <p>{product.name_product}</p>
                </div>
                <figure onClick={() => handleCart(product)} >
                    <FontAwesomeIcon className="icon-card-cart" icon={faCartShopping} />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;