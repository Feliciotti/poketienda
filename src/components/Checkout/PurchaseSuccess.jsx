import './checkout.css'
import { useLocation } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import { useEffect, useState } from 'react'


const PurchaseSuccess = () => {
  const location = useLocation()
  const { clearCart } = useCartContext()

  clearCart()

  return (
    <div className='main-child success'>
      <p>¡Compra realizada!</p>
      <p>código de seguimiento: {location.state}</p>
    </div>
  )
}

export default PurchaseSuccess