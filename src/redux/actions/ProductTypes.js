import { UPDATE_PRODUCT_TYPES } from "../reducers/constants";

export const updateProductTypes = () => {
    return (dispatch) => {
        dispatch({
            type:UPDATE_PRODUCT_TYPES,
        })
    }
}