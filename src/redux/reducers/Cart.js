import { ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_IN_CART , DELETE_PRODUCT_IN_CART , VIEW_PRODUCT } from './constants/index';
const initialState = {
  shoppingCart: [],
};

const TaskEvent = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const productInCart = state.shoppingCart.find(
        (p) => p.productCode === action.product.productCode
      );
      if (!productInCart) {
        action.product.quantity = 1;
        return {
          shoppingCart: [...state.shoppingCart, action.product],
        };
      } else {
        let newcart = state.shoppingCart;
        const objIndex = newcart.findIndex(
          (obj) => obj.productCode === action.product.productCode
        );
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
        }
        return { shoppingCart: [...newcart] };
      }
    case REMOVE_PRODUCT_IN_CART:
      let cart = state.shoppingCart;
      const index = cart.findIndex(
        (obj) => obj.productCode === action.product.productCode
      );
      cart.splice(index, 1);
      return { shoppingCart: [...cart] };

    case DELETE_PRODUCT_IN_CART:
      let newcart = state.shoppingCart;
      const objIndex = newcart.findIndex(
        (obj) => obj.productCode === action.product.productCode
      );
      if (newcart[objIndex].quantity >= 2) {
        newcart[objIndex].quantity = newcart[objIndex].quantity - 1;
      } else {
        newcart.splice(objIndex, 1);
      }
      return { shoppingCart: [...newcart] };
    case VIEW_PRODUCT:
      console.log(action);
      state.viewProduct = action.product;
    default:
      return state;
  }
};

export default TaskEvent;
