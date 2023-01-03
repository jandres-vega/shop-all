import React from 'react';
import {useGetProducts} from "./useGetProducts";

const initialState = {
    cart: [],
    products: [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

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

    state.products = useGetProducts()

    return {
        state,
        addToCart,
        removeFromCart,
        setState
    }
}

export {useInitialState}