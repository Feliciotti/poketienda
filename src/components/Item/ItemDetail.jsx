import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
//components

const ItemDetail = ({item, itemId}) =>{
   const { addItem, isInCart, removeItem } = useContext(CartContext)

   const onAdd = () =>{
      addItem({...item, quantity: 1})
   }

   return(
      <section id='item-detail' className="container-fluid d-flex justify-content-center align-items-center">
         <div className='detail-container d-flex'>

            <div className='detail-imgContainer'>
               <img className='detail-img w-100' src={item.img} alt="" />
            </div>
            <div className='detail-desc d-flex flex-column align-items-center justify-content-center'>
               <div className="d-flex align-items-center">
                  <h4 className='item-title fs-1'>{item.product}</h4> <span>stock: {item.stock}</span>
               </div>
                  <p className="fs-5">{item.desc}</p>
                    
                  {!isInCart(itemId) ? (
                     <>
                        <button className="toCart-bttn cartAdd-bttn" onClick={onAdd}>
                           <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                     </>
                  ):(
                     <button className="toCart-bttn cartRemove-bttn" onClick={() => removeItem(item)}>
                        eliminar del carrito
                     </button>
                  )}
            </div>
                
         </div>
      </section>
   )
}

export default ItemDetail