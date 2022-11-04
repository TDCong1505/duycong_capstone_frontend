import { UPDATE_PRODUCT_LINES } from "../reducers/constants";

export const updateProductLines = () => {
  return (dispatch) => {
    dispatch({
      type:UPDATE_PRODUCT_LINES,
    })
  }
}
