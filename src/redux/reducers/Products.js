import { UPDATE_PRODUCTS, GET_PRODUCTS , URL  } from "./constants/index";
import axios from "axios";

const initialState = {
  products: [],
};

const loadData = () => {
  axios
    .get(URL + "products")
    .then((data) => (initialState.products = data.data));
};
loadData();

const Product = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      loadData();
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export default Product;
