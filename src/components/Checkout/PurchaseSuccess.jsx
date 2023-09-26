import { useLocation } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'


const PurchaseSuccess = () => {
  const location = useLocation()
  const { clearCart } = useCartContext()

  clearCart()

  console.log(location);
  return (
    <p>{location.state}</p>
  )
}

export default PurchaseSuccess