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
      <div className='cart-list-container pokedex-box'>
        {cart.length == 0 ? (
            <p>Carrito vacío</p>
        ) : (
          <>
            <div className='cart-list'>
              <div className='list-products pokedex-white-bg scrollbar'>
                {cartDetail}
              </div>
            </div>
            <div className='cart-options'>
              <div className='box-styling inner-border'>
                <h1>Resumen de compra</h1>
                <span>Productos: {totalItems()}</span>
                <span>Precio total: ${totalPurchaseValue()}</span>
              </div>

              <div className='w-100 d-flex flex-column'>
                {/* redirects to checkout */}
                <button className='large-bttn' onClick={() => navigate('/checkout/step1')}>Comprar</button>
                <button className='large-bttn' onClick={clearCart}>Vaciar carrito</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart