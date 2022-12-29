import React from 'react';

const initialState = {
    cart: []
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

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export {useInitialState}