import {
  UPDATE_PRODUCTS, GET_PRODUCTS
} from "../reducers/constants";

export const updateProducts = () => {
  return (dispatch) => {
    dispatch({
      type:UPDATE_PRODUCTS,
    })
  }
}

export const getProducts = (products) => {
  return (dispatch) => {
    dispatch({
      type:GET_PRODUCTS,
      payload:products,
    })
  }
}