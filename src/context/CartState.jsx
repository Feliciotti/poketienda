import React from 'react'
import { useReducer } from 'react'
import { cartContext } from './cartContext'
import cartReducer from './cartReducer'

function CartState(props) {

    const initialState = {
        cart: []
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addItem = (order) => {
        state.cart.findIndex(product => product.id === order.id) > -1 ?
            dispatch({
                type: 'INCREASE_QTY',
                payload: order
            })
        :
            dispatch({
                type: 'ADDTO_CART',
                payload: order
            })
    }

    const removeItem = (product) =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }

    const clearCart = () =>{
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    const isInCart = (id) =>{
        return state.cart.find(isInCart => isInCart.id === id)
    }

    const totalItems = () =>{
        let totalProducts = state.cart.reduce((acc, requestedItem) => acc + requestedItem.quantity, 0)
        return totalProducts
    }

    const totalPurchaseValue = () =>{
        let totalValue = state.cart.reduce((acc, requestedItems) => acc + (requestedItems.quantity * requestedItems.price), 0)
        return totalValue
    }

  return (
    <cartContext.Provider
    value={{
        cart: state.cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalItems,
        totalPurchaseValue
    }}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartState