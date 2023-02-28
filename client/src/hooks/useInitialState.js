import React from "react";
import axios from "axios";
// import { useGetProducts } from './useGetProducts';

const initialState = {
  cart: [],
  products: [],
  copyProducts: [],
  categories: [],
  productDetail: {},
  SubCategories: []
};
const useInitialState = () => {
  const [state, setState] = React.useState(initialState);
  const [name, setName] = React.useState("");


  // const handleCategory = (category) => {
  //   const encontrado = state.categories.find(
  //     (item) => item.name_category === category
  //   );
  //   setState({
  //     ...state,
  //     SubCategories: (state.SubCategories = encontrado.SubCategories)
  //   });
  //   setChange(false);
  // };
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id)
    });
  };
  const getDataProducts = () => {
    setName("");
    setState({
      ...state,
      copyProducts: state.products
    });
  };
  // const filterSubCategoryProducts = (id, currenPage) => {
  //   const filterProducts = state.products.filter(
  //     (product) => product.SubCategoryId === id
  //   );
  //   setState({
  //     ...state,
  //     copyProducts: filterProducts
  //   });
  //   setChange(true);
  //   currenPage(1);
  // };

  const handleDetailProduct = async (id) => {
    try {
      await axios(`http://localhost:3000/products/${id}`).then((res) => {
        setState({
          ...state,
          productDetail: res.data
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
    handleDetailProduct,
    name,
    setName
  };
};

// eslint-disable-next-line import/prefer-default-export
export { useInitialState };
