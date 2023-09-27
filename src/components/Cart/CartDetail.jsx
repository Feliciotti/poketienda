import Counter from "../Counter/Counter"
import { useCartContext } from "../../context/cartContext"

function CartDetail({productInCart}) {
  const {removeItem} = useCartContext()

  return (
    <>
      <div className='product'>

        <div className='product-detail'>
          <div className='product-imgContainer'>
              <img className='product-img' src={productInCart.img} alt="Miniatura del producto" />
          </div>
          <div className="product-name-wrapper">
            <p className='product-name fs-3 m-0'>{productInCart.name} </p>
            <span className="product-removeBttn" onClick={() => removeItem(productInCart)}>Eliminar</span>
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