import axios from 'axios';
import { URL } from './constants/index';
import {
    UPDATE_PRODUCT_LINES
  } from "./constants/index";

const initialState = {
  productLines:[],
};

const loadData = () => {
  axios.get(URL + "productlines").then((data) => initialState.productLines = data.data);
}
loadData();

const ProductLines = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRODUCT_LINES:
        loadData();
        default:
          return state;
      }
}

export default ProductLines;
