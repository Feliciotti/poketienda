//dependencies
import { useNavigate } from 'react-router-dom';
//db
import db from '../../services/firestore';
import {addDoc, collection } from 'firebase/firestore/lite'
//components
import withRouter from './hoc/checkout'
import CheckoutDetail from './CheckoutDetail';


//function
const CheckoutStep3 = ({client, order, totalPurchaseValue}) => {
  const checkout3navigate = useNavigate()

  const orderDetail = order.map((productsReq) =>{
    return (<CheckoutDetail key={productsReq.id} productsReq={productsReq}/>)
  })

  //buttons
  const handleCancel = () =>{
    clearCart()
  }

  const handleBuy = () =>{
    const purchase_summary = {}
    purchase_summary.date = Date()
    purchase_summary.shipping = client.shipping
    purchase_summary.buyer = client
    purchase_summary.products = order
    purchase_summary.total = totalPurchaseValue
      
    const orderCollection = collection(db, import.meta.env.VITE_FIRESTORE_ORDERS);
    addDoc(orderCollection, purchase_summary)
      .then(res => (checkout3navigate('/checkoutSuccess', {state:res.id})))
  }

  return (
    <div className='main-child checkout3 pokedex-box slide-up'>
      <div className='summary-wrapper pokedex-white-bg'>
        <div className='summary scrollbar'>
          <hr className='hr'/>
          
          <span>Cliente:</span>

          <div className='summary--client'>
            <span> 
              <img className='client--img' src="/imgs/checkout/user.png" alt="Icono de usuario en resumen de compra" />
              {client.full_name}
            </span>
            <span>
              <img className='client--img' src="/imgs/checkout/email.png" alt="Icono de email en resumen de compra" />
              {client.email}
            </span>
            <span>
              <img className='client--img' src="/imgs/checkout/phone.png" alt="Icono de teléfono en resumen de compra" />
              {client.phone_number}
            </span>
            <span>
              <img className='client--img' src="/imgs/checkout/shipping.png" alt="Icono de envío en resumen de compra" />
              {client.shipping ?
                client.address
              :
                'Retira en Pueblo Paleta'
              }
            </span>
          </div>

          <hr className='hr'/>

          <div className='summary--products'>
            {orderDetail}
          </div>
          <span className='summary--total'>Total: ${totalPurchaseValue}</span>
          
          <hr className='hr'/>
        </div>
      </div>

      <div className='ch3-bttns-container'>
        <button className='large-bttn' type='submit' onClick={handleBuy}>Comprar</button>
        <button className='large-bttn' onClick={handleCancel}>Cancelar X</button>
      </div>
    </div>
  )
}

export default withRouter(CheckoutStep3)