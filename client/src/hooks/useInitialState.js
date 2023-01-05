import React from 'react';
import {useGetProducts} from "./useGetProducts";

const initialState = {
    cart: [],
    products: [],
    copyProducts : []
}
const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    useGetProducts(state, setState);
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    const filterByCategory = (category) => {
        setState({
            ...state,
            copyProducts: state.products = state.products
                .filter(product => product.Category.name_category === category)
        })
    }
    const getDataProducts = () => {
        setState({
            ...state,
            copyProducts: state.products
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        filterByCategory,
        getDataProducts,
        setState
    }
}

export {useInitialState}