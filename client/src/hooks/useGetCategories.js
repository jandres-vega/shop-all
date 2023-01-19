import React from 'react';
import axios from 'axios';
// https://shop-all-production.up.railway.app/categories
const API_URL_CATEGORIES = 'http://localhost:3000/categories';
const useGetCategories = (state, setState) => {
   // const [categories, setCategories] = React.useState([]);

   React.useEffect(() => {
      axios(API_URL_CATEGORIES)
         .then((res) => {
            setState({
               ...state,
               categories: (state.categories = res.data),
            });
         })
         .catch((e) => {
            console.error(e);
         });
   }, []);
};

export { useGetCategories };
