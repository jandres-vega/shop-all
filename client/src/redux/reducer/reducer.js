import { types } from "../types.actions/index";

const initialState = {
  allProducts: [],
  copyAllProducts: [],
  categories: [],
  subCategories: {}
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {

    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: actions.payload,
        copyAllProducts: actions.payload
      };
    case types.GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: actions.payload
      };
    case types.FILTER_BY_CATEGORY_PRODUCT:
      return {
        ...state,
        subCategories: actions.payload
      };
    case types.FILTER_BY_SUB_CATEGORY_PRODUCT:
      const productsFilter = state.allProducts.filter(item => {
        return item.SubCategoryId === actions.value;
      });
      console.log(productsFilter);
      return {
        ...state,
        copyAllProducts: productsFilter
      };

    default:
      return state;
  }
};
export { rootReducer };