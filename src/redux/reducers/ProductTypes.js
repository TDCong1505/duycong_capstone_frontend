import axios from 'axios';
import { UPDATE_PRODUCT_TYPES, URL } from './constants/index';
const initialState = {
    productTypes:[],
};

const loadData = () => {
    axios.get(URL + "producttypes").then((data) => initialState.productTypes = data.data);
}
loadData();

const ProductTypes = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_PRODUCT_TYPES:
            loadData();
        default:
            return state;
    }
}

export default ProductTypes;
