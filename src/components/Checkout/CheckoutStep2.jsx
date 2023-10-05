//dependencies
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  return(
    <>
      <form onSubmit={handleSubmit} onChange={handleChange} 
      className='main-child checkout2-form slide-up'>
        <h1>Datos</h1>
        <div className='form-inputs-container'>
          <div className='form-input-wrapper'>
            <label className='input-label' htmlFor="full-name">nombre completo</label>
            <input className='input'
            id='full-name'
            name='full_name'
            type="text"
            value={clientData.name}
            required placeholder='Ingrese su nombre completo'
            autoComplete='true'/>
          </div>
          <div className='form-input-wrapper'>
            <label className='input-label' htmlFor="e-mail">correo electrónico </label>
            <input className='input'
            id='e-mail'
            name='email'
            type='email'
            required placeholder='Ingrese su e-mail'
            autoComplete='true'/>
          </div>
          {shipping ?
            <div className='form-input-wrapper'>
            <label className='input-label' htmlFor="address">dirección</label>
            <input className='input'
            id='address'
            name='address'
            type='text'
            required placeholder='Ingrese nombre de calle y altura'
            autoComplete='true'/>
            </div>
            : ''
          }
          <div className='form-input-wrapper'>
            <label className='input-label' htmlFor="phone-number">teléfono</label>
            <input className='input'
            id='phone-number'
            name='phone_number'
            type='text'
            required placeholder='Ingrese su número telefónico'
            autoComplete='true'/>
          </div>
        </div>
        
        <div className='ch2-bttns-container'>
          <button className='large-bttn' onClick={() => formNavigate(-1)}>Atrás</button>
          <button className='large-bttn' type='submit'>Siguiente</button>
        </div>
      </form>
    </>
  )
}
export default withRouter(CheckoutStep2)