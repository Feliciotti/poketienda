//dependencies
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {

    const [checkCart, setCheckCart] = useState([])
    const { cart, totalPurchaseValue } = useCartContext()
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
        name: products.name,
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