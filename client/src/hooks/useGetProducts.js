import React from 'react';
import axios from 'axios';

const API = 'http://localhost:3000/products';
const useGetProducts = (state, setState) => {
   React.useEffect(() => {
      axios(API)
         .then((res) => {
            setState({
               ...state,
               products: (state.products = res.data),
               copyProducts: (state.products = res.data),
            });
         })
         .catch((e) => {
            console.error(e);
         });
   }, []);
};

export { useGetProducts };
