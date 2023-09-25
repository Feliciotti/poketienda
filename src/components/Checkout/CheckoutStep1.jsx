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
        <h1>Formas de entrega</h1>
        <div className='delivery-container d-flex flex-column gap-5 align-items-center'>
          <div onClick={handleNoShipDelivery} className="delivery-selector">
            <h2>Retiro por Pueblo Paleta <span className='delivery-title--span'>¡Gratis!</span></h2>
          </div>
          <div onClick={handleShipDelivery} className='delivery-selector'>
            <h2>Envío a domicilio <span className='delivery-title--span'>$50</span></h2>
          </div>
        </div>
    </>
  )
}

export default withRouter(CheckoutStep1)