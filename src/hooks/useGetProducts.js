import React from "react";
import axios from "axios";

const API = 'https://api.escuelajs.co/api/v1/products';
const useGetProducts = () => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios(API).then((res) => {
            setProducts(res.data)
        }).catch(e => {
            console.error(e)
        })
    },[]);
    return products
}

export {useGetProducts}