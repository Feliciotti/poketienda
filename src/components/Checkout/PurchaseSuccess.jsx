import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const PurchaseSuccess = () => {
  const location = useLocation()
  const { clearCart } = useContext(CartContext)

  clearCart()

  console.log(location);
  return (
    <p>{location.state}</p>
  )
}

export default PurchaseSuccess