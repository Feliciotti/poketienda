import './counter.css'
//context
import { useCartContext } from '../../context/cartContext'

const Counter = ({item, count}) => {
    const { addItem } = useCartContext()

    let maxReq = Number(item.stock)
    let quantityReq = Number(item.quantity)
    let totalPerProduct = Number(item.quantity) * Number(item.price)

    const handleRest = () =>{
        addItem({...item, quantity: (quantityReq != 1 && quantityReq - 1)})
    }
    const handleAdd = () => {
        addItem({...item, quantity: (quantityReq != maxReq && quantityReq + 1)})
    }

  return (
    <> 
        <div className='d-flex align-items-center'>
            <button onClick={handleRest} className="counter-bttn"
                disabled={quantityReq == 1 ?
                    true
                    :
                    false
                }
            >-</button>
            <span className='counter justify-content-center'>
                {count}
            </span>
            <button onClick={handleAdd} className="counter-bttn"
                disabled={quantityReq == maxReq ?
                    true
                    :
                    false
                }
            >+</button>
        </div>
        <span>${totalPerProduct}</span>
    </>
  )
}

export default Counter