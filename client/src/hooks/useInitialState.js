import React from 'react';
import axios from 'axios';
import { useGetProducts } from './useGetProducts';
import { useGetCategories } from './useGetCategories';

const initialState = {
   cart: [],
   products: [],
   copyProducts: [],
   categories: [],
   productDetail: {},
   SubCategories: [],
};
const useInitialState = () => {
   const [state, setState] = React.useState(initialState);
   const [change, setChange] = React.useState(true);
   useGetCategories(state, setState);
   useGetProducts(state, setState);

   const handleCategory = (category) => {
      const encontrado = state.categories.find(
         (item) => item.name_category === category,
      );
      setState({
         ...state,
         SubCategories: (state.SubCategories = encontrado.SubCategories),
      });
      setChange(false);
   };
   const addToCart = (payload) => {
      setState({
         ...state,
         cart: [...state.cart, payload],
      });
   };
   const removeFromCart = (payload) => {
      setState({
         ...state,
         cart: state.cart.filter((items) => items.id !== payload.id),
      });
   };
   const getDataProducts = () => {
      setChange(true);
      setState({
         ...state,
         copyProducts: state.products,
      });
   };
   const filterSubCategoryProducts = (id, currenPage) => {
      const filterProducts = state.products.filter(
         (product) => product.SubCategoryId === id,
      );
      setState({
         ...state,
         copyProducts: filterProducts,
      });
      setChange(true);
      currenPage(1);
   };

   const handleDetailProduct = async (id) => {
      try {
         await axios(`http://localhost:3000/products/${id}`).then((res) => {
            setState({
               ...state,
               productDetail: res.data,
            });
         });
      } catch (e) {
         throw e.response.data;
      }
   };

   return {
      state,
      addToCart,
      removeFromCart,
      getDataProducts,
      handleCategory,
      filterSubCategoryProducts,
      handleDetailProduct,
      change,
   };
};

// eslint-disable-next-line import/prefer-default-export
export { useInitialState };
