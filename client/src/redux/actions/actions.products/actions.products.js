import axios from "axios";
import { types } from "../../types.actions";

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

export {
  getAllProducts
};