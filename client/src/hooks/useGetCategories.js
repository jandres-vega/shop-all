import React from 'react';
import axios from "axios";
const useGetCategories = () => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect( () => {
        axios('http://localhost:3000/categories').then(res => {
            setCategories(res.data)
        }).catch(e => {
            console.error(e);
        })
    },[]);

    return categories
}

export {useGetCategories}
