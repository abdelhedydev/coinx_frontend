/* eslint-disable no-console */
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  articles: [],
  totalPrice: 0,
  articleCount: 0,
};

export const shoppingCartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case ADD_TO_CART:
      const newItem = { ...action.payload.article };
      newItem.quantity = action.payload.quantity;
      return {
        articles: [...state.articles, newItem],
        totalPrice: state.totalPrice + action.payload.article.price,
        articleCount: state.articleCount + 1,
      };
    case REMOVE_FROM_CART:
      return {
        articles: [...state.articles.filter((art) => art.id !== action.payload.article.id)],
        totalPrice: state.totalPrice - action.payload.article.price,
        articleCount: state.articleCount - 1,
      };
    default: return state;
  }
};

