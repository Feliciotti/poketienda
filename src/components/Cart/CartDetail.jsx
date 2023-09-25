import Counter from "../Counter/Counter"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartDetail({productInCart}) {
  const {removeItem} = useContext(CartContext)

  return (
    <>
      <div className='cart-list d-flex align-items-center p-2'>
        <div className='list-product-imgContainer d-flex align-items-center gap-3'>
            <img className='list-product-img' src={productInCart.img} alt="Miniatura del producto" />
            <div>
              <p className='cart-product--section fs-3'>{productInCart.product} </p>
              <div className="d-flex">
                <span onClick={() => removeItem(productInCart)}>Eliminar</span>
              </div>
            </div>
        </div>
        <div className="counter d-flex align-items-center gap-3">
          <Counter item={productInCart} count={productInCart.quantity} itemId={productInCart.id}/>
        </div>
      </div>
    </>
  )
}

export default CartDetail