import './checkout.css'
import { useNavigate } from 'react-router-dom';
import withRouter from './hoc/checkout';

const CheckoutStep1 = () => {
  let step1Navigate =  useNavigate()

  const handleNoShipDelivery = () =>{
    step1Navigate('/checkout/step2', {state:false})
  }

  const handleShipDelivery = () =>{
    step1Navigate('/checkout/step2', {state:true})
  }

  return (
    <>
    <div className='main-child slide-up p-3'>
      <h1 className='checkout1-title'>Formas de entrega</h1>
      <div className='checkout-delivery-options'>
        <div onClick={handleNoShipDelivery} className="delivery-option">
          <h2>Retiro por Pueblo Paleta <span className='delivery-price'>¡Gratis!</span></h2>
        </div>
        <div onClick={handleShipDelivery} className='delivery-option'>
          <h2>Envío a domicilio <span className='delivery-price'>$50</span></h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default withRouter(CheckoutStep1)