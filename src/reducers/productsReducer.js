import {
  GET_PRODUCTS, LOADING_ENABLE,
  ADD_PRODUCT_TO_CART,
  RESET_CART
} from '../actions/types';

const initialState = {
  isLoading: false,
  products: '',
  cart: []
};

export default function (state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case LOADING_ENABLE:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case ADD_PRODUCT_TO_CART:
      let selectedIndex = newState.cart.findIndex(index => index.name === action.payload.name);
      if (selectedIndex > -1) {
        // console.log('Item already exists)
      } else {
        newState.cart.push(action.payload)
      }

      if (action.payload.qty === 0) {
        newState.cart.splice(selectedIndex, 1);
        delete newState.cart[action.payload]
      }
      return {
        ...state,
        cart: newState.cart
      }
    case RESET_CART:
      return {
        ...state,
        cart: action.payload
      }
    default:
      return state;
  }
}
