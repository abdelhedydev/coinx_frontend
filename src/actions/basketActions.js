import { ADD_TO_CART, REMOVE_FROM_CART } from './types';


export const addToCart = (item, quantity) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      item,
      quantity,
    },
  });
};

export const removeFromCart = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
};
