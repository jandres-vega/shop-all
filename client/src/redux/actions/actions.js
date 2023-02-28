import axios from "axios";
import { types } from "../types.actions";

const getAllProducts = () => {
  return async function(dispatch) {
    const response = (await axios("/products")).data;
    return dispatch(
      {
        type: types.GET_ALL_PRODUCTS,
        payload: response
      }
    );
  };
};

const getAllCategories = () => {
  return async function(dispatch) {
    const response = (await axios("/categories")).data;
    return dispatch(
      {
        type: types.GET_ALL_CATEGORIES,
        payload: response
      }
    );
  };
};
const filterByCategory = (categories, category) => {
  const categoryFind = categories.find(itemCategory => itemCategory.name_category === category);
  return {
    type: types.FILTER_BY_CATEGORY_PRODUCT,
    payload: categoryFind
  };
};
const filterSubCategoryProducts = (value) => {
  return {
    type: types.FILTER_BY_SUB_CATEGORY_PRODUCT,
    value
  };
};


export {
  getAllProducts,
  getAllCategories,
  filterByCategory,
  filterSubCategoryProducts
};