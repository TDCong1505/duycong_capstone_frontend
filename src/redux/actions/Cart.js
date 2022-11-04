import { ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_IN_CART , DELETE_PRODUCT_IN_CART } from "../reducers/constants";

export const addProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type:ADD_PRODUCT_TO_CART,
            product:product,
        })
    }
}

export const removeProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type:REMOVE_PRODUCT_IN_CART,
            product:product,
        })
    }
}

export const deleteProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type:DELETE_PRODUCT_IN_CART,
            product:product,
        })
    }
}