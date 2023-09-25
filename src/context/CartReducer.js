import { ADDTO_CART, CLEAR_CART, REMOVE_FROM_CART, INCREASE_QTY } from "./types";

export default (state, action) =>{
    const {payload, type} = action;

    switch(type){
        case ADDTO_CART:
                return{
                    ...state,
                    cart: [...state.cart,
                        payload]
                }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter( i => i.id != payload.id)
            }
        case INCREASE_QTY:
            return{
                ...state,
                cart: state.cart.filter(productInCart => productInCart.id === payload.id ?
                    (productInCart.quantity = payload.quantity)
                :
                    productInCart.quantity
                )
            }
        case CLEAR_CART:
            return{
                ...state,
                cart: []
            }
        default:
            return state;
    }
}