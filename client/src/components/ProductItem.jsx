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
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>{`$${product.price}`}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleCart(product)} >
                    <FontAwesomeIcon className="icon-card-cart" icon={faCartShopping} />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;