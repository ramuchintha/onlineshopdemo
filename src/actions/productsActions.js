import axios from 'axios';
import {
  GET_PRODUCTS,
  GET_ERRORS,
  ADD_PRODUCT_TO_CART,
  LOADING_ENABLE,
  RESET_CART
} from './types';

import { PRODUCTS_Endpoint as enAPI } from '../env_variable';
import cartData from '../static/cart.json';

// Get products list
export const getProducts = () => dispatch => {
  dispatch({
    type: LOADING_ENABLE,
    payload: true
  });
  let productsApi = enAPI;

  axios
    .get(productsApi)
    .then(response => {
      console.log('response: ', response);
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data.items
      });
      dispatch({
        type: LOADING_ENABLE,
        payload: false
      });
    })
    .catch(err => {

      let errorPayload;
      errorPayload = {
        message: 'Products fetching error'
      };
      /* need to remove this once the api is up currently reading the local json file on error case*/
      dispatch({
        type: GET_PRODUCTS,
        payload: cartData.items
      });

      /* need to remove this once the api is up currently reading the local json file on error case*/
      dispatch({
        type: GET_ERRORS,
        payload: errorPayload
      });
      dispatch({
        type: LOADING_ENABLE,
        payload: false
      });
    });
};

// Set the product to cart
export const addItemToCart = (product) => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product
  });
}

export const setSearchResults = (products) => dispatch => {
  dispatch({
    type: GET_PRODUCTS,
    payload: products
  });
}

export const resetCart = () => dispatch => {
  dispatch({
    type: RESET_CART,
    payload: []
  });
}

// Set Errors across redux
export const dispatchErrors = errorPayload => {
  return {
    type: GET_ERRORS,
    payload: errorPayload
  };
};