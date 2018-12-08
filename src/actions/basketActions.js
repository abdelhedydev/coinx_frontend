import { ADD_TO_CART, REMOVE_FROM_CART } from "./types"


export const addToCart = ({article, quantity}) => (dispatch) => {
    dispatch({type: ADD_TO_CART,
    payload: {
        article,
        quantity
    }})  
 };

 export const removeFromCart = (article) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: article })  
 };
