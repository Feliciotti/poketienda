//styles
import './cart.css'
//dependencies
import { useNavigate } from 'react-router-dom'
//components
import CartDetail from './CartDetail'
//context
import { useCartContext } from '../../context/cartContext'

const Cart = () =>{
   const {cart, clearCart, totalItems, totalPurchaseValue} = useCartContext()
   const navigate = useNavigate();

   const cartDetail = cart.map((productInCart) =>{
      return (<CartDetail key={productInCart.id} productInCart={productInCart}/>)
   })

   return(
      <section id='cart' className='d-flex justify-content-center'>
         <div className='cart-list-container d-flex justify-content-center align-items-center'>
            {cart.length == 0 ? (
               <p>Carrito vacío</p>
            ) : (
               <>
                  <div className='cart-list-products d-flex flex-column'>
                     <h3 className='cart-options-title'>Productos</h3>
                     {cartDetail}
                  </div>
                  <div className='cart-options d-flex flex-column justify-content-evenly'>
                     <h3 className='cart-options-title'>Resumen de compra</h3>
                     <span>Cantidad de productos: {totalItems()}</span>
                     <span>Precio total: ${totalPurchaseValue()}</span>

                     <button onClick={() => navigate('/checkout/step1')}>Comprar</button>
                     <button onClick={clearCart}>Vaciar carrito</button>
                  </div>
               </>
            )}
         </div>
      </section>
   )
}

export default Cart