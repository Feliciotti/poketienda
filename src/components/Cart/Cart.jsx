//styles
import './cart.css'
//dependencies
import { useNavigate } from 'react-router-dom'
//components
import CartDetail from './CartDetail'
import { useScrollTop } from '../../hooks/index'
//context
import { useCartContext } from '../../context/cartContext'

const Cart = () =>{
  const {cart, clearCart, totalItems, totalPurchaseValue} = useCartContext()
  const navigate = useNavigate();
  useScrollTop()

  const cartDetail = cart.map((productInCart) =>{
    return (<CartDetail key={productInCart.id} productInCart={productInCart}/>)
  })

  return(
    <section className='main-child d-flex justify-content-center'>
      <div className='cart-list-container d-flex justify-content-between align-items-center p-3'>
        {cart.length == 0 ? (
            <p>Carrito vacío</p>
        ) : (
          <>
            <div className='cart-list d-flex flex-column p-3'>
              <h3 className='cart-options-title'>Productos</h3>
              <div className='list-products p-2'>
                {cartDetail}
              </div>
            </div>
            <div className='cart-options d-flex flex-column justify-content-evenly p-3'>
              <h3 className='cart-options-title'>Resumen de compra</h3>
              <span>Cantidad de productos: {totalItems()}</span>
              <span>Precio total: ${totalPurchaseValue()}</span>

              {/* redirects to checkout */}
              <button className='cart-bttn' onClick={() => navigate('/checkout/step1')}>Comprar</button>
              <button className='cart-bttn' onClick={clearCart}>Vaciar carrito</button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart