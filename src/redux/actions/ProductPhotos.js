import {
    UPDATE_PRODUCT_PHOTOS
  } from "../reducers/constants";
  
  export const updateProductPhotos = () => {
    return (dispatch) => {
      dispatch({
        type:UPDATE_PRODUCT_PHOTOS,
      })
    }
  }