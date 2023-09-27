//dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//db
import db from '../../firebase/config';
import {addDoc, collection } from 'firebase/firestore/lite'
//components
import withRouter from './hoc/checkout'
import CheckoutDetail from './CheckoutDetail';
//context
import { useCartContext } from '../../context/cartContext';


const CheckoutStep3 = ({client, order, totalPurchaseValue}) => {
  const { clearCart } = useCartContext()
  const [purchaseId, setPurchaseId] = useState('')
  const checkout3navigate = useNavigate()
    useEffect(() =>{
      purchaseId != '' && (clearCart(), checkout3navigate('/checkoutSuccess', {state:purchaseId}))
    },[purchaseId])

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
   
  const orderCollection = collection(db, 'orders');
  addDoc(orderCollection, purchase_summary)
    .then(resp => setPurchaseId(resp.id))
  }

  return (
    <div className='main-child checkout3 d-flex align-items-center justify-content-center'>
      <div>
        <div className='checkout-summary d-flex flex-column'>
          <span >
            {client.full_name}
          </span>
          <span  >{client.email}</span>
          <span >{client.phone_number}</span>
          <span >{
            client.shipping ?
              client.address
            :
              'Retira en Pueblo Paleta'
            }
          </span>
        </div>
        <div className='checkout-summary'>
          {orderDetail}
          <span>Total: ${totalPurchaseValue}</span>
        </div>
      </div>
      <div className='form-bttns-wrapper d-flex flex-column align-items-center gap-5'>
        <button className='form-bttn cart-bttn' type='submit' onClick={handleBuy}>Comprar</button>
        <button className='form-bttn cart-bttn' onClick={handleCancel}>Cancelar X</button>
      </div>
    </div>
  )
}

export default withRouter(CheckoutStep3)