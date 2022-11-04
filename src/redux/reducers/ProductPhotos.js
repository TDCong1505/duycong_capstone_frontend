import axios from 'axios';
import { URL } from './constants/index';
import {
    UPDATE_PRODUCT_PHOTOS
  } from "./constants/index";

const initialState = {
  productPhotos:[],
};

const loadData = () => {
  axios.get(URL + "productphotos").then((data) => initialState.productPhotos = data.data);
}
loadData();

const ProductLines = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRODUCT_PHOTOS:
        loadData();
        default:
          return state;
      }
}

export default ProductLines;
