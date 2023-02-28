// import axios from "axios";
// import { types } from "../../types.actions/index";
//
// const filterBySubCategories = (category) => {
//   return async function(dispatch) {
//     const response = (await axios(`http://localhost:3000/categories/filter-category?sub_category=${category}`)).data;
//     return dispatch({
//       type: types.FILTER_BY_SUB_CATEGORY_PRODUCT,
//       payload: response
//     });
//   };
// };
//
// export { filterBySubCategories };