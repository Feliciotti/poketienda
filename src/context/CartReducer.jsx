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
                cart: state.cart.filter(productInCart =>
                productInCart.id === payload.id ? (productInCart.quantity = payload.quantity) : productInCart.quantity)
            }
            // let currentStockRequested =  state.cart[payload.index].quantity
            // let newStockReq = state.cart.map(item =>{
            //     if((item.id === payload.order.id) && (currentStockRequested <= payload.order.stock)){
            //         return {...item, quantity: (currentStockRequested + payload.order.quantity)}
            //     } else{
            //         return console.log('no se puede agregar más');
            //     }
            // })
            // return{
            //     ...state,
            //     cart: state.cart.splice(payload.index, 1, ...newStockReq)
            // }
            
        case CLEAR_CART:
            return{
                ...state,
                cart: []
            }
        default:
            return state;
    }
}