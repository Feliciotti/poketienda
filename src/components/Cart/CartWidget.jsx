import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/cartContext';

const CartWidget = () => {
  const {totalItems} =  useCartContext()
  return (
      <div>
        <FontAwesomeIcon icon={faCartShopping} />
        {totalItems() > 0 && <span>{totalItems()}</span>}
        
      </div>
  )
};


export default CartWidget