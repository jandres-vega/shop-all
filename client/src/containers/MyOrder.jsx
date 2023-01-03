import React from 'react';
import OrderItem from "../components/OrderItem";
import iconArrow from '../assets/icons/flechita.svg';
import {AppContext} from "../context/AppContext";
import '../styles/MyOrder.scss';

const MyOrder = () => {

    const {state} = React.useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => {
            return accumalator + Number(currentValue.price);
        }
        return state.cart.reduce(reducer, 0);
    }
    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={iconArrow} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {
                    state.cart.map(product => (
                        <OrderItem product={product} key={`orderItem-${product.id}`} />
                    ))
                }
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
};

export default MyOrder;