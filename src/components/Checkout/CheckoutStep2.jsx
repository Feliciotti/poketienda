//dependencies
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
//styles
import './checkout.css'
//hoc
import withRouter from './hoc/checkout'

const CheckoutStep2 = ({shipping}) => {
  let formNavigate = useNavigate()
  const [clientData, setClientData] = useState({
    full_name: '', address: '', email: '', phone_number: '', shipping: shipping
  })

  const handleChange = (e) =>{
    setClientData({
      ...clientData,
      //takes the value of "name" attribute in input and relates it with the input value,
      //filling the attributes of matching name in clienData
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    formNavigate('/checkout/step3', {state: clientData})
  }
  const handleReturn = (e) =>{
    e.preventDefault()
    formNavigate('/checkout/step1')
  }


  return(
    <>
      <form onSubmit={handleSubmit} onChange={handleChange} action="" className='d-flex gap-5 flex-column align-items-center checkout-form p-5 justify-content-between'>
        <h1>Datos</h1>
        <div className='form-inputs-container d-flex justify-content-center'>
          <div className='inputs-row d-flex flex-column'>
            <div className='input-container'>
              <label className='input-label' htmlFor="full-name">Nombre completo</label>
              <input className='checkoutForm-label'
              id='full-name'
              name='full_name'
              type="text"
              value={clientData.name}
              required placeholder='Ingrese su nombre completo'
              autoComplete='true'/>
            </div>
            <div className='input-container'>
              <label className='input-label' htmlFor="e-mail">Correo electrónico </label>
              <input className='checkoutForm-label'
              id='e-mail'
              name='email'
              type='email'
              required placeholder='Ingrese su e-mail'
              autoComplete='true'/>
            </div>
          </div>
          <div className='inputs-row d-flex flex-column'>
            {shipping ?
              <div className='input-container'>
              <label className='input-label' htmlFor="address">Dirección</label>
              <input className='checkoutForm-label'
              id='address'
              name='address'
              type='text'
              required placeholder='Ingrese nombre de calle y altura'
              autoComplete='true'/>
              </div>
              : ''
            }
            <div className='input-container'>
              <label className='input-label' htmlFor="phone-number">Teléfono</label>
              <input className='checkoutForm-label'
              id='phone-number'
              name='phone_number'
              type='text'
              required placeholder='Ingrese su número telefónico'
              autoComplete='true'/>
            </div>
          </div>
        </div>
        
        <div>
          <button onClick={handleReturn}>Atrás</button>
          <button type='submit'>Siguiente</button>
        </div>
      </form>
    </>
  )
}

// export default CheckoutStep2

export default withRouter(CheckoutStep2)