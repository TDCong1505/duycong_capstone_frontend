import axios from 'axios';
import { URL } from './constants/index';
import {
    UPDATE_PRODUCT_DESCRIPTIONS
  } from "./constants/index";

const initialState = {
  productDescriptions:[],
};

const loadData = () => {
  axios.get(URL + "productdescriptions").then((data) => initialState.productDescriptions = data.data);
}
loadData();

const ProductDescriptions = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRODUCT_DESCRIPTIONS:
        loadData();
        default:
          return state;
      }
}

export default ProductDescriptions;
