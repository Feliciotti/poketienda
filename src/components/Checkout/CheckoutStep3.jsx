//dependencies
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//db
import db from '../../firebase/config';
import {addDoc, collection } from 'firebase/firestore/lite'
//components
import withRouter from './hoc/checkout'
import CheckoutDetail from './CheckoutDetail';
//context
import { CartContext } from '../../context/CartContext';
import PurchaseSuccess from './PurchaseSuccess';


const CheckoutStep3 = ({client, order, totalPurchaseValue}) => {
  const { clearCart } = useContext(CartContext)
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
    <div>
      <div>
        <span>
          {client.full_name}
        </span>
        <span>{client.email}</span>
        <span>{client.phone_number}</span>
        <span>{
          client.shipping ?
            client.address
          :
            'Retira en Pueblo Paleta'
          }
        </span>
      </div>
      <div className='orderResume'>
        {orderDetail}
        <span>Total: ${totalPurchaseValue}</span>
      </div>
      <div>
        <button type='submit' onClick={handleBuy}>Comprar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  )
}

export default withRouter(CheckoutStep3)