import {createContext, useContext} from 'react';

const cartContext = createContext([])
const useCartContext = () => useContext(cartContext)

export {cartContext, useCartContext}