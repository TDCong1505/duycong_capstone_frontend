import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Cart from './Cart';
import ProductTypes from "./ProductTypes";
import Login from "./Login";
import ProductLines from "./ProductLines";
import Products from "./Products";
import ProductPhotos from "./ProductPhotos";
import ProductDescriptions from "./ProductDescriptions";
import IsDevice from './IsDevice';

export default (history) => combineReducers({
    router: connectRouter(history),
    cart:Cart,
    productTypes:ProductTypes,
    productLines:ProductLines,
    products:Products,
    login:Login,
    productPhotos:ProductPhotos,
    productDescriptions:ProductDescriptions,
    device:IsDevice,
});
