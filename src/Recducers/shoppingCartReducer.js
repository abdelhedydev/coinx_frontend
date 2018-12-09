/* eslint-disable no-console */
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

// Definig intial State
const initialState = {
  itemsCount: 0,
  totalPrice: 0,
  items: [],
};

const shoppingCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      if (state.items.find((element) => (element.id === payload.item.id)) === undefined) {
        const {
          item: {
            id, name, price, images, categories, description,
          },
        } = payload;
        const newItem = {
          id, name, price, images, categories, description,
        };
        newItem.quantity = payload.quantity;
        newItem.totalPrice = newItem.price * newItem.quantity;
        return {
          ...state,
          itemsCount: state.itemsCount + 1,
          totalPrice: state.totalPrice + newItem.totalPrice,
          items: [...state.items, newItem],
        };
      }
      let newTotalPrice = state.totalPrice;
      const newItems = state.items.map((element) => {
        if (element.id === payload.item.id) {
          const newItem = { ...element };
          newItem.quantity += payload.quantity;
          newItem.totalPrice = newItem.price * newItem.quantity;
          newTotalPrice += (newItem.price * newItem.quantity) - element.totalPrice;
          return newItem;
        }
        return element;
      });
      return {
        ...state,
        totalPrice: newTotalPrice,
        items: newItems,
      }; }
    case REMOVE_FROM_CART: {
      const itemToRemove = payload;
      const newItems = state.items.filter((element) => element.id !== itemToRemove.id);
      return {
        ...state,
        itemsCount: state.itemsCount - 1,
        totalPrice: state.totalPrice - itemToRemove.totalPrice,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
