import Counter from "../Counter/Counter"
import { useCartContext } from "../../context/cartContext"

function CartDetail({productInCart}) {
  const {removeItem} = useCartContext()

  return (
    <>
      <div className='product'>

        <div className='product-detail'>
          <div className='product-img-container'>
              <img className='product-img' src={productInCart.img} alt="Miniatura del producto" />
          </div>
          <div className="product-name-wrapper">
            <p className='fs-3 m-0'>{productInCart.name} </p>
            <span className="product-remove" onClick={() => removeItem(productInCart)}>Eliminar</span>
          </div>
        </div>

        <div className="d-flex">
          <Counter item={productInCart} count={productInCart.quantity} itemId={productInCart.id}/>
        </div>
      </div>
    </>
  )
}

export default CartDetail