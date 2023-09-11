import React from 'react'
import { useReducer } from 'react'
import { CartContext } from './CartContext'
import CartReducer from './CartReducer'

function CartState(props) {

    const initialState = {
        cart: []
    }
    const [state, dispatch] = useReducer(CartReducer, initialState)

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

    const removeItem = (id) =>{
        let toRemove = state.findIndex(item => item.id === id)
        let updated = state.filter(item => item != toRemove)
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {...updated}
        })
    }

    const clearCart = () =>{
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    const getIfItsInCart = (id) =>{
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
    <CartContext.Provider
    value={{
        cart: state.cart,
        addItem,
        removeItem,
        clearCart,
        getIfItsInCart,
        totalItems,
        totalPurchaseValue
    }}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState