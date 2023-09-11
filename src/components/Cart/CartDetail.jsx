import Counter from "../helpers/Counter"

function CartDetail({productInCart}) {

  console.log(productInCart);
  return (
    <>
      <div className='cart-list d-flex align-items-center justify-content-between'>
        <div className='list-product-imgContainer d-flex align-items-center gap-3'>
            <img className='list-product-img' src={productInCart.img} alt="Miniatura del producto" />
            <p className='cart-product--section fs-3'>{productInCart.product} </p>
        </div>
        <div>
          <Counter item={productInCart} count={productInCart.quantity} cartView={true}/>
        </div>
      </div>
    </>
  )
}

export default CartDetail