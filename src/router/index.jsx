import { createBrowserRouter } from "react-router-dom"
//components
import App from "../App"
import { ItemListContainer } from "../components/Item/ItemListContainer"
import { ItemDetailContainer } from "../components/Item/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import NotFound from "../layout/NotFound/NotFound"
import CheckoutStep1 from "../components/Checkout/CheckoutStep1"
import CheckoutStep2 from "../components/Checkout/CheckoutStep2"
import CheckoutStep3 from "../components/Checkout/CheckoutStep3"
import PurchaseSuccess from "../components/Checkout/PurchaseSuccess"


export const router = createBrowserRouter([
   {
      path: '/',
      element: <App/>,
      errorElement: <NotFound/>,
      children: [
         {
            index: true,
            element: <ItemListContainer/>,
         },
         {
            path: '/item/:id',
            element: <ItemDetailContainer/>
         },
         {
            path: '/cart',
            element: <Cart/>
         },
         {
            path: '/checkout/step1',
            element: <CheckoutStep1/>
         },
         {
            path: '/checkout/step2',
            element: <CheckoutStep2/>
         },
         {
            path: '/checkout/step3',
            element: <CheckoutStep3/>
         },
         {
            path: '/checkoutSuccess',
            element: <PurchaseSuccess/>
         }
      ]
   }
])