//dependencies
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//context
import { useCartContext } from '../../context/cartContext'


//function
const PurchaseSuccess = () => {
  const { clearCart } = useCartContext()
  const location = useLocation()
  const [purchaseId, setPurchaseId] = useState('')

  useEffect(() =>{
    setPurchaseId(location.state), clearCart()
  },[])

  return (
    <div className='main-child success'>
      <div>
        <p>¡Compra realizada!</p>
        <p>código de seguimiento: {purchaseId}</p>
      </div>
    </div>
  )
}

export default PurchaseSuccess