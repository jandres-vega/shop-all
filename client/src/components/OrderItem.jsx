import React from 'react';
import '../styles/OrderItem.scss';
import iconItem from '../assets/icons/icon_close.png';
import {AppContext} from "../context/AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const OrderItem = ({product}) => {

    const {removeFromCart} = React.useContext(AppContext);

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt="bike" />
            </figure>
            <p>{product.title}</p>
            <p>{`$${product.price}`}</p>
            <FontAwesomeIcon
                className="close-order-item"
                onClick={() => removeFromCart(product)}
                icon={faXmark}
            />
        </div>
    );
};

export default OrderItem;