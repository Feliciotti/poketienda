import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {totalItems} =  useContext(CartContext)
  return (
      <div>
        <FontAwesomeIcon icon={faCartShopping} />
        {totalItems() > 0 && <span>{totalItems()}</span>}
        
      </div>
  )
};


export default CartWidget