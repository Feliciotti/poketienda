//dependencies
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {

    const [checkCart, setCheckCart] = useState([])
    const { cart, totalPurchaseValue } = useContext(CartContext)
    const location = useLocation()
      useEffect(() =>{
        cart.length > 0 ?
        setCheckCart(true)
        :
        setCheckCart(false)
      },[cart.length])

    const productsInCart = cart.map((products) =>{
      return{
        id: products.id,
        name: products.product,
        quantityReq: products.quantity,
        totalValue: products.quantity * products.price
      }
    })


    if(checkCart){
      return(
        <Component
          {...props}
          shipping={location.state}
          client={location.state}
          order={productsInCart}
          totalPurchaseValue={totalPurchaseValue()}
        />
      )
    }else{
      return <Navigate to='/'/>
    }

  }
  return ComponentWithRouterProp;
}

export default withRouter