import {
    UPDATE_PRODUCT_DESCRIPTIONS
  } from "../reducers/constants";
  
  export const updateProductDescriptions = () => {
    return (dispatch) => {
      dispatch({
        type:UPDATE_PRODUCT_DESCRIPTIONS,
      })
    }
  }